import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const quickLinks = [
  { title: 'Home', description: 'Back to the Ontriq homepage', href: '/' },
  { title: 'Background Verification Services', description: 'Employment, education, criminal & identity checks', href: '/services/bgv' },
  { title: 'All Services', description: 'Explore everything we offer', href: '/services' },
  { title: 'Contact Us', description: 'Get in touch with our team', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-7xl md:text-9xl font-bold tracking-tight text-[#F75834] mb-6">404</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved &mdash; here are some helpful places to go instead.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h2 className="font-bold text-slate-900 mb-1">{link.title}</h2>
                <p className="text-sm text-slate-500">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
