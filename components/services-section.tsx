'use client';

import React, { memo } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const services = [
  {
    id: '001',
    title: 'Background Verification (BGV) Services',
    description: 'At Ontriq, Background Verification (BGV) is at the core of our operations and remains our primary source of revenue. We take immense pride in being Sri Lanka’s most trusted and fastest-growing BGV provider, known for our speed, accuracy, and reliability. We are the only Background Verification company in Sri Lanka capable of completing full BGV cases within 7 working days.',
    categories: ['Speed', 'Accuracy', 'Reliability', '7-day Turnaround', 'Compliance', 'Proprietary Workflows'],
    customImage: '/services/bgv.webp',
    images: [
      'https://framerusercontent.com/images/vGSJoy0fkCYvuK5CETUzS64NNo.jpg',
      'https://framerusercontent.com/images/6xxZ3D6rnu26P86nUVvj2eanCY.jpg',
      'https://framerusercontent.com/images/6girwIRKdg1doDEWAHr4oDIbroU.jpg'
    ]
  },
  {
    id: '002',
    title: 'Human Resource Solutions',
    description: 'At Ontriq, our Human Resource Management services are designed to support organizations in building and maintaining a productive, compliant, and engaged workforce. We provide end-to-end HR solutions that align with your business goals and ensure smooth workforce operations.',
    categories: ['HR Policy Development', 'Employee Onboarding & Offboarding', 'Performance Management', 'Employee Relations', 'Compliance & Documentation', 'HR Administration'],
    customImage: '/services/hr.webp',
    images: [
      'https://framerusercontent.com/images/DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg',
      'https://framerusercontent.com/images/PTZo29JDyFUqhP5lmoOwf726M.jpg',
      'https://framerusercontent.com/images/2BxeG0o2qWf8AOHmXP5mvB7fXo.jpg'
    ]
  },
  {
    id: '003',
    title: 'Talent Recruitment',
    description: 'At Ontriq, our Talent Acquisition and Recruitment Solutions are designed to help businesses attract, identify, and hire top-tier talent aligned with their organizational goals and culture. We deliver customized recruitment strategies that ensure the right candidates are placed in the right roles—efficiently and effectively.',
    categories: ['End-to-End Hiring Support', 'Executive Search', 'Volume Hiring', 'Candidate Screening', 'Employer Branding'],
    customImage: '/services/recruitment.webp',
    images: [
      'https://framerusercontent.com/images/qQlR5lTiRYzT2lPzSWLLVkcgH6Y.jpg',
      'https://framerusercontent.com/images/PzUf5VcgXOfitprgtvScN6spik.jpg',
      'https://framerusercontent.com/images/7HAgaIAjq6jlYJoi8ME87oXs6w.jpg'
    ]
  },
  {
    id: '004',
    title: 'Payroll Management',
    description: 'At Ontriq, we offer accurate, timely, and fully compliant Payroll Processing and Administration services that help businesses manage employee compensation with confidence and ease. Our payroll solutions are designed to reduce administrative burdens, eliminate errors, and ensure adherence to all regulatory requirements.',
    categories: ['Monthly Payroll Processing', 'Statutory Compliance', 'Payslip Generation', 'Tax Calculations', 'Leave Integration', 'Benefits Administration'],
    customImage: '/services/payroll.webp',
    images: [
      'https://framerusercontent.com/images/9hTP0obDSaEcVCyC5kaHbx7FfI.jpg',
      'https://framerusercontent.com/images/zhgLgjCtsbVWTYRQuFeBf3XoW6c.jpg',
      'https://framerusercontent.com/images/OvxlgM3dgsl1n9Hl1FAnutk3YQ.jpg'
    ]
  },
  {
    id: '005',
    title: 'Business Formation and Setup',
    description: 'At Ontriq, we provide end-to-end support for entrepreneurs, startups, and established companies looking to legally establish and operate their businesses in Sri Lanka. Our Business Formation and Regulatory Setup services are designed to simplify the incorporation process, ensure full legal compliance, and position businesses for long-term success.',
    categories: ['Company Registration', 'Regulatory Compliance', 'Document Preparation', 'Legal Structures Advisory', 'Ongoing Compliance'],
    customImage: '/services/formation.webp',
    images: [
      'https://framerusercontent.com/images/vGSJoy0fkCYvuK5CETUzS64NNo.jpg',
      'https://framerusercontent.com/images/6xxZ3D6rnu26P86nUVvj2eanCY.jpg',
      'https://framerusercontent.com/images/6girwIRKdg1doDEWAHr4oDIbroU.jpg'
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-10 px-4 md:px-6" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-[1800px] rounded-[40px] bg-blue-950 p-8 md:p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" aria-hidden="true">
             <Image 
                src="https://framerusercontent.com/images/vrhxHFTuxnCduP4nljUulqZcuQ.jpg" 
                alt=""
                fill
                className="object-cover"
                priority
                quality={75}
                sizes="100vw"
             />
        </div>
        
        <div className="relative z-10 flex flex-col gap-20">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
                <span className="text-white">002</span>
                <span>Services</span>
              </div>
            </div>
            
            <div className="lg:col-span-9 flex items-start gap-4">
               <h2 id="services-heading" className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">Services.</h2>
               <span className="text-xl font-semibold text-[#F75834] md:text-2xl mt-1 md:mt-2" aria-label="5 services available">(5)</span>
            </div>
          </div>

          {/* Accordion */}
          <AccordionPrimitive.Root type="single" collapsible className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
              <AccordionPrimitive.Item 
                value={service.id}
                className="group border-b border-white/10 last:border-0 scroll-mt-24"
                id={`service-${service.id}`}
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger 
                    className="flex w-full items-center py-10 text-left transition-all"
                    onClick={() => {
                      setTimeout(() => {
                        const element = document.getElementById(`service-${service.id}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 300);
                    }}
                  >
                    <div className="grid w-full gap-4 lg:gap-8 items-center">
                        {/* Mobile Layout */}
                        <div className="flex lg:hidden items-start justify-between gap-4">
                            <div className="flex-1">
                                <span className="text-lg font-medium text-[#F75834] block mb-2">({service.id})</span>
                                <span className="text-2xl font-semibold md:text-3xl group-hover:text-[#F75834] transition-colors duration-300">{service.title}</span>
                            </div>
                            <div className="flex-shrink-0 pt-1">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-[#F75834] group-hover:border-[#F75834] group-hover:text-white">
                                    <Plus className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:hidden" />
                                    <Minus className="h-5 w-5 transition-transform duration-300 hidden group-data-[state=open]:block" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 w-full">
                            {/* Number - Aligned with "What we do" */}
                            <div className="lg:col-span-3">
                                <span className="text-lg font-medium text-[#F75834]">({service.id})</span>
                            </div>
                            
                            {/* Title - Aligned with "Services." */}
                            <div className="lg:col-span-8">
                                <span className="text-2xl font-semibold md:text-3xl lg:text-4xl group-hover:text-[#F75834] transition-colors duration-300">{service.title}</span>
                            </div>

                            {/* Plus/Minus Button - Far right */}
                            <div className="lg:col-span-1 flex justify-end">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-[#F75834] group-hover:border-[#F75834] group-hover:text-white">
                                    <Plus className="h-6 w-6 transition-transform duration-300 group-data-[state=open]:hidden" />
                                    <Minus className="h-6 w-6 transition-transform duration-300 hidden group-data-[state=open]:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                      <div className="lg:col-span-3 hidden lg:block"></div>
                      <div className="lg:col-span-9">
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center pt-4">
                            {/* Text & Categories */}
                            <div className="flex flex-col gap-6 md:col-span-8">
                              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                                {service.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.categories.map((category, idx) => (
                                  <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80">
                                    {category}
                                  </span>
                                ))}
                              </div>
                              <a href={`/services/${service.id === '001' ? 'background-verification-services' : service.id === '002' ? 'hr-management-services' : service.id === '003' ? 'recruitment-services' : service.id === '004' ? 'payroll-processing-services' : 'company-formation'}`} className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#F75834] uppercase tracking-wider mt-2 w-max transition-all hover:text-[#ff7455]">
                                Explore Service
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F75834]/30 bg-[#F75834]/10 transition-all group-hover/btn:bg-[#F75834] group-hover/btn:text-white">
                                  <ArrowRight className="h-4 w-4" />
                                </span>
                              </a>
                            </div>
                            
                            {/* Image */}
                            <div className="md:col-span-4 flex md:justify-end">
                               <div className="relative aspect-square w-full max-w-[280px] rounded-2xl overflow-hidden mt-4 md:mt-0 border border-white/10 group-hover:border-white/20 transition-all">
                                 <Image src={service.customImage} alt={service.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                               </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
              </motion.div>
            ))}
          </AccordionPrimitive.Root>


        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
