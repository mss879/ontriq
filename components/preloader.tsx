'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const VIDEO_SRC = '/Logo_Animation_Generation_For_Ontriq.mp4';
const EXIT_FADE_MS = 150;
const EARLY_EXIT_REMAINING_S = 0.06;
const MIN_VISIBLE_MS = 450;
const AUTOPLAY_GRACE_MS = 2500;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

type PreloaderProps = {
  onDone?: () => void;
};

export default function Preloader({ onDone }: PreloaderProps) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  // Render on first paint (prevents website flashing behind).
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const isExitingRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const hasStartedRef = useRef(false);
  const visibleAtRef = useRef<number>(0);

  const complete = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    onDone?.();
  }, [onDone]);

  const beginExit = useCallback(() => {
    if (isExitingRef.current) return;
    // Don't allow an instant dismiss before the user even sees it.
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const elapsed = visibleAtRef.current ? now - visibleAtRef.current : MIN_VISIBLE_MS;
    if (elapsed < MIN_VISIBLE_MS) {
      window.setTimeout(() => beginExit(), MIN_VISIBLE_MS - elapsed);
      return;
    }
    isExitingRef.current = true;
    setIsExiting(true);
    window.setTimeout(() => {
      setIsVisible(false);
      complete();
    }, EXIT_FADE_MS);
  }, [complete]);

  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    setVideoEl(node);
  }, []);

  // Decide whether to show the preloader (client-side only).
  useEffect(() => {
    try {
      const skip = prefersReducedMotion();
      if (skip) {
        setIsVisible(false);
        complete();
        return;
      }
    } catch {
      // If anything odd happens, keep the preloader visible.
    }
  }, [complete]);

  useEffect(() => {
    if (isVisible) {
      visibleAtRef.current = typeof performance !== 'undefined' ? performance.now() : Date.now();
    }
  }, [isVisible]);

  // Once visible and the video element is mounted, wire up playback + exit.
  useEffect(() => {
    if (!isVisible || !videoEl) return;

    let fallbackTimer: number | undefined;
    let maxTimer: number | undefined;
    let graceTimer: number | undefined;

    const tryPlay = async () => {
      try {
        await videoEl.play();
      } catch {
        // Autoplay can be blocked; don't immediately exit (that looks like a flash).
        // We'll keep the preloader visible, and still have a maxTimer as a safety net.
      }
    };

    const onEnded = () => beginExit();
    const onError = () => beginExit();
    const onCanPlay = () => void tryPlay();
    const onPlaying = () => {
      hasStartedRef.current = true;
      if (graceTimer) {
        window.clearTimeout(graceTimer);
        graceTimer = undefined;
      }
    };
    const onTimeUpdate = () => {
      if (!hasStartedRef.current) return;
      if (!Number.isFinite(videoEl.duration) || videoEl.duration <= 0) return;
      const remaining = videoEl.duration - videoEl.currentTime;
      if (remaining <= EARLY_EXIT_REMAINING_S) beginExit();
    };

    videoEl.addEventListener('ended', onEnded);
    videoEl.addEventListener('error', onError);
    videoEl.addEventListener('canplay', onCanPlay);
    videoEl.addEventListener('playing', onPlaying);
    videoEl.addEventListener('timeupdate', onTimeUpdate);

    // If metadata is already available, kick off play immediately.
    if (videoEl.readyState >= 2) {
      void tryPlay();
    }

    // If autoplay doesn't start within a grace window, allow click-to-play.
    graceTimer = window.setTimeout(() => {
      // no-op: just ends the grace period; click handler below can start playback.
    }, AUTOPLAY_GRACE_MS);

    // Absolute max time so we never trap the user.
    maxTimer = window.setTimeout(beginExit, 12000);

    return () => {
      videoEl.removeEventListener('ended', onEnded);
      videoEl.removeEventListener('error', onError);
      videoEl.removeEventListener('canplay', onCanPlay);
      videoEl.removeEventListener('playing', onPlaying);
      videoEl.removeEventListener('timeupdate', onTimeUpdate);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      if (graceTimer) window.clearTimeout(graceTimer);
      if (maxTimer) window.clearTimeout(maxTimer);
    };
  }, [beginExit, isVisible, videoEl]);

  if (!isVisible) return null;

  return (
    <div
      className={
        'fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ' +
        (isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto')
      }
      aria-label="Loading"
      role="status"
      onClick={() => {
        // Helps when autoplay is blocked: clicking anywhere will attempt playback.
        if (!videoEl || hasStartedRef.current) return;
        void videoEl.play();
      }}
    >
      <div className="flex w-full flex-col items-center px-6">
        <div className="mb-5 text-center">
          <div className="text-5xl font-semibold leading-tight text-gray-900 md:text-6xl">Welcome</div>
          <div className="mt-2 text-base text-gray-600 md:text-lg">We’re getting things ready</div>
          <div className="mt-3 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-gray-900 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="h-2 w-2 rounded-full bg-gray-900 animate-bounce" style={{ animationDelay: '120ms' }} />
            <span className="h-2 w-2 rounded-full bg-gray-900 animate-bounce" style={{ animationDelay: '240ms' }} />
          </div>
        </div>
        <video
          ref={videoRef}
          className="h-auto w-[360px] max-w-[85vw] object-contain md:w-[460px]"
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
