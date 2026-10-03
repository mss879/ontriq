export interface SubpageFaqItem {
  question: string;
  answer: string;
}

interface BgvSubpageFaqProps {
  heading: string;
  items: SubpageFaqItem[];
}

// Visible Q&A plus matching FAQPage JSON-LD, built from the same array so the
// schema can never diverge from the on-page text.
export function BgvSubpageFaq({ heading, items }: BgvSubpageFaqProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="mt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">{heading}</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.question} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.question}</h3>
            <p className="text-slate-600 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
