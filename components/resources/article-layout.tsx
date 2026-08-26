import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTASection } from '@/components/cta-section';

interface ArticleLayoutProps {
  /** H1 of the article */
  title: string;
  /** Opening summary paragraph rendered under the H1 */
  lede: string;
  /** Human-readable publish date, e.g. 'August 26, 2026' */
  publishedDisplay: string;
  /** Short label for the breadcrumb trail (current page) */
  breadcrumbLabel: string;
  children: React.ReactNode;
}

// Shared shell for /resources articles. Server component — everything inside
// renders in the crawlable HTML. Body content should be semantic HTML styled
// by the .article-prose rules in globals.css.
export function ArticleLayout({
  title,
  lede,
  publishedDisplay,
  breadcrumbLabel,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: breadcrumbLabel },
        ]}
        className="container mx-auto px-4 md:px-6 pt-28 md:pt-32"
      />
      <article className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <header className="max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            Ontriq Insights &middot; {publishedDisplay}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">{lede}</p>
        </header>
        <div className="max-w-3xl mx-auto article-prose">{children}</div>
      </article>
      <CTASection />
    </main>
  );
}
