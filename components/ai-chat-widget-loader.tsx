'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// The chat widget is pure client-side UI with no SEO value, so it is excluded
// from SSR and its bundle is only fetched once the browser is idle. This keeps
// ~350 lines of widget JS out of the critical path on every page.
const AiChatWidget = dynamic(
  () => import('./ai-chat-widget').then((mod) => mod.AiChatWidget),
  { ssr: false }
);

export function AiChatWidgetLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 2500);
    return () => window.clearTimeout(id);
  }, []);

  return ready ? <AiChatWidget /> : null;
}
