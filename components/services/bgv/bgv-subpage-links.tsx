import Link from 'next/link';
import { bgvSubpages } from '@/lib/bgv-subpages';

interface GuideLink {
  href: string;
  title: string;
}

interface BgvSubpageLinksProps {
  /** Slug of the current subpage, excluded from the sibling list. */
  current: string;
  /** Resource guides most relevant to this check. */
  guides?: GuideLink[];
}

// Related guides + links to every other BGV check. Server-rendered so all
// links are present in the crawlable HTML.
export function BgvSubpageLinks({ current, guides = [] }: BgvSubpageLinksProps) {
  const siblings = bgvSubpages.filter((page) => page.slug !== current);

  return (
    <>
      {guides.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Guides</h2>
          <ul className="space-y-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="text-[#0098F3] font-semibold hover:underline">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {siblings.map((page) => (
            <Link
              key={page.slug}
              href={`/services/bgv/${page.slug}`}
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-slate-900 mb-1">{page.name}</h3>
              <p className="text-xs text-slate-500">{page.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
