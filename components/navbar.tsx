'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

import StaggeredMenu, { StaggeredMenuHandle } from './staggered-menu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  {
    label: 'About',
    ariaLabel: 'Learn about us',
    link: '/about'
  },
  {
    label: 'Services',
    ariaLabel: 'View our services',
    link: '#',
    children: [
      { label: 'Background Verification', ariaLabel: 'Background Verification', link: '/services/bgv' },
      { label: 'HR Management', ariaLabel: 'HR Management', link: '/services/hr-management-services' },
      { label: 'Recruitment', ariaLabel: 'Recruitment', link: '/services/recruitment-services' },
      { label: 'Payroll', ariaLabel: 'Payroll', link: '/services/payroll-processing-services' },
      { label: 'Company Formation', ariaLabel: 'Company Formation', link: '/services/company-formation' },
      { label: 'Startup Support', ariaLabel: 'Startup Support', link: '/services/startup-support-services' },
      { label: 'Director Services', ariaLabel: 'Director Services', link: '/services/director-services' },
    ]
  },
  {
    label: 'Technology',
    ariaLabel: 'Technology',
    link: '/technology'
  },
  { label: 'Resources', ariaLabel: 'Employer guides and resources', link: '/resources' },
  { label: 'FAQ', ariaLabel: 'View FAQ', link: '/faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61577141807829' },
  { label: 'LinkedIn', link: 'https://linkedin.com/company/ontriq' },
  { label: 'Instagram', link: 'https://www.instagram.com/ontriq._/' }
];

export default function Navbar() {
  const menuRef = useRef<StaggeredMenuHandle>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isHomePage = pathname === '/';
  const useWhiteLinks = isHomePage && !isScrolled;

  const servicesDropdownItems = [
    { label: 'Background Verification', href: '/services/bgv', desc: 'Employee background checks in 7 working days' },
    { label: 'HR Management', href: '/services/hr-management-services', desc: 'End-to-end HR solutions' },
    { label: 'Recruitment', href: '/services/recruitment-services', desc: 'Talent acquisition & hiring' },
    { label: 'Payroll', href: '/services/payroll-processing-services', desc: 'Compliant payroll processing' },
    { label: 'Company Formation', href: '/services/company-formation', desc: 'Business setup & registration' },
    { label: 'Startup Support', href: '/services/startup-support-services', desc: 'Launch & scale confidently' },
    { label: 'Director Services', href: '/services/director-services', desc: 'Professional nominee directors' },
  ];

  const isNavActive = useCallback(
    (href: string) => {
      if (!pathname) return false;
      if (href === '/') return pathname === '/';
      return pathname === href || pathname.startsWith(href + '/');
    },
    [pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The services menu stays mounted (only visually hidden when closed) so its
  // links are present in the server-rendered HTML for crawlers.
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const handlePointer = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [servicesOpen]);

  const linkClass = (href: string) =>
    `text-xl font-semibold uppercase tracking-tighter leading-none transition-colors ${useWhiteLinks
      ? isNavActive(href)
        ? 'text-white underline underline-offset-4'
        : 'text-white/90 hover:text-white'
      : isNavActive(href)
        ? 'text-black underline underline-offset-4'
        : 'text-gray-900/90 hover:text-black'
    }`;

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    // Only trigger if clicking on the container itself, not the menu button
    if ((e.target as HTMLElement).closest('.sm-toggle')) return;
    menuRef.current?.open();
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 flex w-full items-center transition-all duration-300 ${isScrolled
        ? 'top-4 px-4 md:px-12 lg:px-16'
        : 'top-6 px-4 md:px-12 lg:px-16'
      }`}>
      <div className={`flex w-full items-center justify-between transition-all duration-300 ${isScrolled
          ? 'rounded-2xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-md px-4 md:px-6 py-3'
          : 'px-0 py-0'
        }`}>
        <div className="flex items-center">
          <Link
            href="/"
            className={`flex items-center px-2 pb-1 overflow-hidden transition-all duration-300 ${isContactPage
                ? ''
                : isScrolled
                  ? ''
                  : 'rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
              }`}
            aria-label="Ontriq - Go to homepage"
          >
            <Image
              src="/ontriq-logo.png"
              alt="Ontriq Logo"
              width={150}
              height={64}
              className="h-12 md:h-16 w-auto object-contain -mt-1"
              priority
            />
          </Link>
        </div>

        <div
          className={`hidden lg:flex items-center gap-12 xl:gap-16 px-5 py-2 transition-all duration-300 ${useWhiteLinks
              ? ''
              : isContactPage
                ? ''
                : isScrolled
                  ? ''
                  : 'rounded-xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
            }`}
          aria-label="Primary links"
        >
          <Link
            href="/about"
            aria-current={isNavActive('/about') ? 'page' : undefined}
            className={linkClass('/about')}
          >
            About
          </Link>
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              className={linkClass('/services')}
              aria-expanded={servicesOpen}
              aria-controls="nav-services-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
            </button>
            <div
              id="nav-services-menu"
              className={`absolute left-0 top-full z-[100] mt-3 w-[300px] rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl transition duration-150 ${servicesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible pointer-events-none -translate-y-1 opacity-0'
                }`}
            >
              <ul className="flex flex-col gap-1">
                {servicesDropdownItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex flex-col gap-0.5 rounded-xl p-3 transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                    >
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-[#0098F3] transition-colors">{item.label}</span>
                      <span className="text-xs text-slate-500 font-medium">{item.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/resources"
            aria-current={isNavActive('/resources') ? 'page' : undefined}
            className={linkClass('/resources')}
          >
            Resources
          </Link>
          <Link
            href="/contact"
            aria-current={isNavActive('/contact') ? 'page' : undefined}
            className={linkClass('/contact')}
          >
            Contact
          </Link>
        </div>



        <nav
          ref={navRef}
          className={`inline-flex items-center px-4 py-2 cursor-pointer ${isContactPage
              ? ''
              : isScrolled
                ? ''
                : 'rounded-xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
            }`}
          onClick={handleContainerClick}
          aria-label="Main navigation"
        >
          <StaggeredMenu
            ref={menuRef}
            navContainerRef={navRef}
            items={menuItems}
            socialItems={socialItems}
            colors={['#FF8918', '#0098F3']}
            accentColor="#FF8918"
            menuButtonColor="#000"
            openMenuButtonColor="#000"
            className="z-[10000] w-full"
          />
        </nav>
      </div>
    </div>
  );
}
