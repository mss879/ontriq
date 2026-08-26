'use client';

import { useEffect, useRef, useState, memo } from 'react';
import { List, ChevronRight } from 'lucide-react';

const tocItems = [
  { id: 'overview', label: 'What Are Background Verification Services?' },
  { id: 'why-it-matters', label: 'Why Background Verification Matters' },
  { id: 'types-of-checks', label: 'Types of Background Checks' },
  { id: 'why-choose-ontriq', label: 'Why Choose Ontriq?' },
  { id: 'packages', label: 'Flexible Verification Packages' },
  { id: 'process', label: 'Verification Process & Quality Control' },
  { id: 'workflow', label: 'Verification Workflow' },
  { id: 'industries', label: 'Industries We Serve' },
  { id: 'legal-compliance', label: 'BGV Laws in Sri Lanka' },
  { id: 'commitment', label: 'Our Commitment' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

export const BgvTableOfContents = memo(function BgvTableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const visibleIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleIds.current.add(entry.target.id);
          else visibleIds.current.delete(entry.target.id);
        });
        // Highlight the first visible section in document order
        const first = tocItems.find((item) => visibleIds.current.has(item.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="py-12 bg-white border-b border-slate-100"
      aria-label="Table of contents"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
              <List className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              In This Guide
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            {tocItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`group flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200 ${
                    activeId === item.id
                      ? 'bg-orange-50 text-[#F75834] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold min-w-[1.5rem] ${
                    activeId === item.id ? 'text-[#F75834]' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm">{item.label}</span>
                  <ChevronRight className={`h-3.5 w-3.5 ml-auto opacity-0 -translate-x-1 transition-all duration-200 ${
                    activeId === item.id
                      ? 'opacity-100 translate-x-0 text-[#F75834]'
                      : 'group-hover:opacity-60 group-hover:translate-x-0'
                  }`} />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
});
