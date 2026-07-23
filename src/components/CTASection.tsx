import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="w-content-width mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center p-16 md:p-24 bg-[#141414] dark:bg-[#141414] rounded-[2rem] border border-white/5"
        >
          <div className="px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/10 text-white border border-white/10 w-fit">
            Let's Talk
          </div>
          
          <h2 className="max-w-2xl text-3xl md:text-4xl font-semibold leading-tight text-white mb-10 text-balance">
            Ready to bring your technical project to life? Let's connect.
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:sagarrai9893@gmail.com"
              className="flex items-center justify-center h-12 px-8 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Send me an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
