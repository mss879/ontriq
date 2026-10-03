import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTASection } from '@/components/cta-section';

export interface RelatedLink {
  href: string;
  title: string;
}

interface ArticleLayoutProps {
  /** H1 of the article */
  title: string;
  /** Opening summary paragraph rendered under the H1 */
  lede: string;
  /** Human-readable publish date, e.g. 'August 26, 2026' */
  publishedDisplay: string;
  /** Short label for the breadcrumb trail (current page) */
  breadcrumbLabel: string;
  /** Human-readable last-updated date, shown when the article has been revised */
  updatedDisplay?: string;
  /** Further reading shown after the article body */
  related?: RelatedLink[];
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
  updatedDisplay,
  related,
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
            {updatedDisplay && <> &middot; Updated {updatedDisplay}</>}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">{lede}</p>
        </header>
        <div className="max-w-3xl mx-auto article-prose">{children}</div>
        {related && related.length > 0 && (
          <aside className="max-w-3xl mx-auto mt-16 pt-10 border-t border-slate-200" aria-labelledby="related-guides">
            <h2 id="related-guides" className="text-2xl font-semibold text-slate-900 mb-6">Related guides and services</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full p-5 rounded-2xl border border-slate-200 bg-white font-semibold text-slate-900 hover:border-[#0098F3] hover:text-[#0098F3] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      <CTASection />
    </main>
  );
}
