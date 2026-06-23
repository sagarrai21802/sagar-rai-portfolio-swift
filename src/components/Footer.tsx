
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-section="footer"
      aria-label="Site footer"
      className="w-full py-10 mt-12 rounded-t-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #bababa 0%, #e6e6e6 50%)',
        color: '#0a0a0a',
        boxShadow: 'inset 0 1px 0 0 rgba(10, 10, 10, 0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:gap-8">
        {/* Name Header */}
        <div className="w-full min-w-0 flex-1 pt-2">
          <h2
            className="whitespace-nowrap transition-opacity duration-150 opacity-100 font-semibold tracking-tighter"
            style={{
              lineHeight: 0.8,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
            }}
          >
            DevPortfolio
          </h2>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col gap-6 mb-2 md:flex-row md:justify-between items-start">
          <div className="flex flex-col items-start gap-2.5">
            <div className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
              <Link
                to="/projects"
                className="text-base text-[#0a0a0a] font-semibold hover:opacity-75 transition-opacity cursor-pointer"
              >
                Projects
              </Link>
            </div>
            <div className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
              <Link
                to="/skills"
                className="text-base text-[#0a0a0a] font-semibold hover:opacity-75 transition-opacity cursor-pointer"
              >
                Tech Stack
              </Link>
            </div>
            <div className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
              <Link
                to="/contact"
                className="text-base text-[#0a0a0a] font-semibold hover:opacity-75 transition-opacity cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <div className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
              <a
                href="https://linkedin.com/in/sagar-rai-ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#0a0a0a] font-semibold hover:opacity-75 transition-opacity cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
              <a
                href="https://github.com/sagarrai21802"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#0a0a0a] font-semibold hover:opacity-75 transition-opacity cursor-pointer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Services Slider & Copyright Combined */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Services Slider */}
          <div
            className="relative h-8 w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          >
            <InfiniteSlider className="flex h-full w-full items-center" gap={32}>
              {[
                "Software Solutions",
                "Mobile Applications",
                "Website Development",
                "SEO Optimization",
                "Data Management",
                "UI/UX Designing",
                "Web Applications",
                "Custom Software",
                "Cloud Integration"
              ].map((service, index) => (
                <div key={index} className="px-6 whitespace-nowrap text-sm font-medium text-[#0a0a0a] uppercase tracking-wider opacity-85 hover:opacity-100 transition-opacity">
                  {service}
                </div>
              ))}
            </InfiniteSlider>
          </div>

          {/* Copyright Divider & Text */}
          <div className="border-t border-[#0a0a0a]/10 pt-3 text-center">
            <p className="text-sm font-medium opacity-60">
              © {currentYear} Sagar Rai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

