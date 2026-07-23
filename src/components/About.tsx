import ScrollRevealText from './ScrollRevealText';
import BlurReveal from './BlurReveal';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <BlurReveal delay={0.2} duration={0.8} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Card: Dark Container */}
          <div className="relative bg-[#111111] dark:bg-[#0a0a0a] rounded-[2rem] p-10 md:p-14 flex flex-col justify-between min-h-[500px] border border-white/5 shadow-2xl">
            
            {/* Quote Badge */}
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-3xl flex items-center justify-center shadow-xl rotate-[-2deg]">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#111111] fill-[#111111]" />
            </div>

            <div>
              <span className="text-sm font-medium text-white/50 mb-8 block">About Me</span>
              <ScrollRevealText
                text="Solving complex engineering challenges through elegant, scalable, and cross-platform solutions. I bridge the gap between creative design and robust architecture."
                className="text-3xl md:text-4xl lg:text-[2.8rem] font-display font-bold text-white leading-[1.2] tracking-tight"
                as="h2"
              />
            </div>

            <div className="mt-16 flex items-center gap-3 text-sm text-white/50 font-medium">
              <span>Software Engineer</span>
            </div>
          </div>

          {/* Right Card: Image */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[500px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop" 
              alt="Developer Profile" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </BlurReveal>
      </div>
    </section>
  );
};

export default About;