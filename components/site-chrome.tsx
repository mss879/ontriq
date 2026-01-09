'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import Preloader from '@/components/preloader';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // If we ever hit an admin route, ensure we don't block rendering.
    if (isAdminRoute) setIsReady(true);
  }, [isAdminRoute]);

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Preloader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
