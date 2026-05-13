'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function BgvQuote() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-slate-900 p-10 md:p-16 text-center"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#0098F3]/15 blur-[100px]" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Get a Custom BGV Quote
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Every organization has unique verification needs. Tell us about your requirements and our team will provide a tailored background verification package designed for your industry and scale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-[#F75834] text-white font-semibold text-lg transition-all hover:bg-[#e04d2d] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F75834] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
