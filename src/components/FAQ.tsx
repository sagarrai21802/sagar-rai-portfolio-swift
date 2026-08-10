import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What software development and IT services do you offer?",
    answer: "I offer end-to-end IT and software development services, specializing in iOS Native App Development (Swift, SwiftUI), Full-Stack Web Development (Next.js, React, Node.js, FastAPI), SaaS product architecture, and custom API integrations. I help clients take concepts from initial design to production-ready deployments on the App Store and cloud hosting (AWS, Vercel)."
  },
  {
    question: "What is your primary expertise in mobile development?",
    answer: "My core mobile expertise is in native iOS development using Swift, SwiftUI, and UIKit. I have built and shipped multiple apps to the App Store, specializing in real-time features, clean architecture (MVVM), offline local storage (Core Data, Realm), and performance profiling. I also design Flutter/React Native cross-platform solutions and hybrid shells using WebView bridges."
  },
  {
    question: "How do you build websites and full-stack applications?",
    answer: "I construct modern web applications with a focus on speed, responsive design, and robust backend integrations. On the frontend, I utilize Next.js, React, and TypeScript with Tailwind CSS for layout. On the backend, I design high-performance RESTful APIs using Python (FastAPI/Uvicorn) and Node.js/Express, connected to databases like PostgreSQL, MongoDB, or Firestore."
  },
  {
    question: "What SEO, GEO, and AEO optimization strategies do you implement?",
    answer: "I implement technical SEO optimizations including clean semantic HTML structure, dynamic sitemap.xml and robots.txt configurations, responsive media assets, and fast page-load speeds (aiming under 1.4s render latency). For GEO and AEO (Answer Engine Optimization), I integrate structured schema markup (JSON-LD) so AI models like ChatGPT, Gemini, and search crawlers can parse and display rich content directly."
  },
  {
    question: "Can you help wrap web portals into native mobile apps?",
    answer: "Yes, I specialize in hybrid web-mobile migrations. I can take an existing web portal (e.g., built in Next.js or React) and wrap it inside a lightweight native mobile shell (using Flutter, SwiftUI, or Kotlin WebView) while handling safe area insets, offline states, pull-to-refresh, push notifications, and hardware features to deliver a native-like experience."
  },
  {
    question: "How do we collaborate or start working on a project?",
    answer: "You can reach out directly via the contact form or send me an email. I start with a consultation to analyze your technical requirements, define milestones, recommend the best tech stack (like choosing between Next.js or native iOS), and provide an execution timeline."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for AEO / Search Engine Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 px-4 bg-background border-t border-white/5">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about my development workflow, services, technology stacks, and optimization methods.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-white/5 bg-[#111111] dark:bg-[#0a0a0a] overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <span className="font-semibold text-white text-lg md:text-xl font-display leading-snug">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full bg-white/5 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-muted-foreground text-base md:text-lg leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
