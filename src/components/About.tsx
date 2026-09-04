import ScrollRevealText from './ScrollRevealText';
import BlurReveal from './BlurReveal';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <BlurReveal delay={0.2} duration={0.8} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left Card: Dark Container */}
          <div className="relative bg-[#111111] dark:bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center min-h-[360px] md:min-h-[420px] border border-white/5 shadow-2xl">

            {/* Quote Badge */}
            <div className="absolute -top-5 -left-5 md:-top-7 md:-left-7 w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl rotate-[-2deg]">
              <Quote className="w-7 h-7 md:w-8 md:h-8 text-[#111111] fill-[#111111]" />
            </div>

            <div>
              <span className="text-xs md:text-sm font-medium text-white/50 mb-3 block">About Me</span>
              <ScrollRevealText
                text="I build iOS and mobile apps as my main focus, while also creating websites and web applications turning ideas into clean, functional software across platforms."
                className="text-2xl md:text-3xl lg:text-[2.2rem] font-display font-bold text-white leading-[1.25] tracking-tight"
                as="h2"
              />
            </div>
          </div>

          {/* Right Card: Image */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[360px] md:min-h-[420px] shadow-2xl">
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