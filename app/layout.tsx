import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import SiteChrome from '@/components/site-chrome';
import { AiChatWidgetLoader } from '@/components/ai-chat-widget-loader';

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const stackSans = localFont({
  src: '../public/StackSansNotch-VariableFont_wght.woff2',
  variable: '--font-stack-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

const siteUrl = 'https://www.ontriq.com';
const siteName = 'Ontriq';
const siteDescription = 'Sri Lanka\'s leading workforce and business solutions provider. Expert HR, Recruitment, Payroll, Company Formation, and Background Verification services delivering results in 7 working days.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ontriq | Sri Lanka\'s Premier Workforce & Business Solutions',
    template: '%s | Ontriq'
  },
  description: siteDescription,
  keywords: [
    'background verification',
    'BGV services',
    'HR solutions',
    'human resource management',
    'talent recruitment',
    'payroll management',
    'company formation',
    'business setup Sri Lanka',
    'employee verification',
    'workforce solutions',
    'BPO services',
    'Sri Lanka HR'
  ],
  authors: [{ name: 'Ontriq', url: siteUrl }],
  creator: 'Ontriq',
  publisher: 'Ontriq (PVT) LTD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/ontriq-favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/ontriq-favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/ontriq-favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/ontriq-favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/ontriq-favicon.png',
    shortcut: '/ontriq-favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'Ontriq | Your Complete Workforce and Business Partner',
    description: siteDescription,
    images: [
      {
        url: '/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq',
      },
    ],
  },

  alternates: {
    canonical: siteUrl,
  },
  category: 'business',
  // Set NEXT_PUBLIC_GSC_VERIFICATION in the Netlify environment to emit the
  // Google Search Console verification meta tag.
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
};

// JSON-LD structured data for organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Ontriq',
  alternateName: 'Ontriq (PVT) LTD',
  url: siteUrl,
  logo: `${siteUrl}/share-img.png`,
  description: siteDescription,
  foundingDate: '2025',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Konnect BPO Technologies (PVT) LTD',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61577141807829',
    'https://linkedin.com/company/ontriq',
    'https://www.instagram.com/ontriq._/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+94-77-999-6940',
    email: 'info@ontriq.com',
    availableLanguage: ['English'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sri Lanka',
  },
  serviceType: [
    'Background Verification',
    'Human Resource Solutions',
    'Talent Recruitment',
    'Payroll Management',
    'Business Formation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${stackSans.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded">
          Skip to main content
        </a>
        <SiteChrome>
          <div id="main-content">
            {children}
          </div>
        </SiteChrome>
        <AiChatWidgetLoader />
        {/* GA4 — inactive until NEXT_PUBLIC_GA_ID is set in the Netlify environment */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
