'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  UserSearch,
  Wallet,
  Building2,
  Rocket,
  Briefcase,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const ACCENT = '#F75834';

const services = [
  {
    id: 'bgv',
    label: 'BGV',
    title: 'Background Verification',
    description: 'Sri Lanka\'s fastest BGV provider. Full cases completed in just 7 working days.',
    href: '/services/bgv',
    icon: ShieldCheck,
  },
  {
    id: 'hr',
    label: 'HR',
    title: 'HR Solutions',
    description: 'End-to-end human resource management aligned with your business goals.',
    href: '/services/hr-management-services',
    icon: Users,
  },
  {
    id: 'recruitment',
    label: 'Recruit',
    title: 'Talent Recruitment',
    description: 'Find and hire top-tier talent with customized recruitment strategies.',
    href: '/services/recruitment-services',
    icon: UserSearch,
  },
  {
    id: 'payroll',
    label: 'Payroll',
    title: 'Payroll Management',
    description: 'Accurate, timely, and fully compliant payroll processing services.',
    href: '/services/payroll-processing-services',
    icon: Wallet,
  },
  {
    id: 'formation',
    label: 'Formation',
    title: 'Business Formation',
    description: 'Complete incorporation and regulatory setup support in Sri Lanka.',
    href: '/services/company-formation',
    icon: Building2,
  },
  {
    id: 'startup',
    label: 'Startup',
    title: 'Startup Support',
    description: 'Turn your ideas into successful businesses with expert guidance.',
    href: '/services/startup-support-services',
    icon: Rocket,
  },
  {
    id: 'director',
    label: 'Director',
    title: 'Director Services',
    description: 'Professional director services to meet legal and compliance requirements.',
    href: '/services/director-services',
    icon: Briefcase,
  },
];

const AUTO_ROTATE_INTERVAL = 2500;

export default function HeroPromptBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeService = services[activeIndex];
  const Icon = activeService.icon;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  // Auto-rotate every 2 seconds, no visible progress bar
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goToNext, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-4xl overflow-hidden rounded-[20px] p-[2px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated border */}
      <div
        className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
        style={{
          background:
            'conic-gradient(from 0deg, rgb(159, 78, 0) 0%, rgb(162, 41, 4) 40%, rgb(0, 0, 0) 50%, rgb(0, 152, 243) 60%, rgb(159, 78, 0) 100%)',
        }}
      />

      <div className="relative h-full w-full rounded-[19px] bg-black/95 backdrop-blur-xl">
        <div className="p-5 sm:p-6 md:p-8">
          {/* Service pills row */}
          <div className="mb-5 sm:mb-6">
            <div
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              role="tablist"
              aria-label="Service categories"
            >
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${service.id}`}
                    onClick={() => handleSelect(index)}
                    className="shrink-0 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap"
                    style={{
                      backgroundColor: isActive ? `${ACCENT}18` : 'rgba(255,255,255,0.04)',
                      color: isActive ? ACCENT : 'rgba(255,255,255,0.5)',
                      border: `1px solid ${isActive ? `${ACCENT}40` : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active service detail card */}
          <div
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={activeService.id}
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 h-[130px] sm:h-[88px] overflow-hidden">
              {/* Icon */}
              <div
                className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${ACCENT}15` }}
              >
                <Icon
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  style={{ color: ACCENT }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  key={`title-${activeIndex}`}
                  className="text-lg sm:text-xl font-semibold text-white mb-1 animate-[slideUp_0.35s_ease-out] truncate"
                >
                  {activeService.title}
                </h3>
                <p
                  key={`desc-${activeIndex}`}
                  className="text-sm sm:text-base text-white/50 leading-relaxed animate-[slideUp_0.35s_ease-out_0.05s_both] line-clamp-1"
                >
                  {activeService.description}
                </p>
              </div>

              {/* CTA with animated border */}
              <Link
                href={activeService.href}
                className="group/cta shrink-0 relative overflow-hidden rounded-xl p-[1px]"
                aria-label={`Learn more about ${activeService.title}`}
              >
                {/* Spinning gradient border */}
                <div
                  className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgb(159, 78, 0) 0%, rgb(162, 41, 4) 40%, rgb(0, 0, 0) 50%, rgb(0, 152, 243) 60%, rgb(159, 78, 0) 100%)',
                  }}
                />
                {/* Glow */}
                <div className="absolute inset-0 bg-orange-500 opacity-40 blur-md" />
                {/* Button inner */}
                <div className="relative flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 transition-all duration-300 group-hover/cta:bg-black/90">
                  <span className="whitespace-nowrap text-sm font-medium text-white">Learn More</span>
                  <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </div>
              </Link>
            </div>

            {/* Subtle accent glow */}
            <div
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ backgroundColor: ACCENT }}
              aria-hidden="true"
            />
          </div>

          {/* Bottom row: service count + explore all */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-white/30 font-medium tracking-wider uppercase">
              {activeIndex + 1} / {services.length} Services
            </span>
            <Link
              href="/services"
              className="group/all flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white/70"
            >
              Explore All Services
              <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/all:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
