'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bgvFaqData } from '@/lib/bgv-faq-data';

export function BgvFaq() {
  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <ScrollAnimate className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" />
                <span className="text-slate-900">11</span>
                <span>FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Common questions about our background verification services in Sri Lanka.
              </p>
            </div>
          </ScrollAnimate>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {bgvFaqData.map((faq, index) => (
                <ScrollAnimate
                  key={index}
                  delay={index * 0.05}
                >
                  <AccordionItem value={`faq-${index}`} className="border-slate-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-[#F75834] hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-slate-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimate>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
