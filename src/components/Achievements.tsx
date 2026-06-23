import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Rocket, Users } from 'lucide-react';

interface CountUpProps {
  value: number;
  suffix?: string;
}

const CountUpNumber = ({ value, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing out quad
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Achievements = () => {
  const containerRef = useRef(null);
  const isHeaderInView = useInView(containerRef, { once: true, margin: "-100px" });

  const achievements = [
    {
      title: "DSA Problems Solved",
      value: 300,
      suffix: "+",
      icon: Code,
      description: "Active problem solver with strong algorithmic and analytical foundations."
    },
    {
      title: "Open Source Stars",
      value: 60,
      suffix: "k+",
      icon: Rocket,
      description: "Key contributor to Alamofire and Kingfisher, impacting millions of installations."
    },
    {
      title: "Users Affected",
      value: 1,
      suffix: "M+",
      icon: Users,
      description: "Built and deployed high-concurrency production apps with excellent uptime."
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.215, 0.61, 0.355, 1] // cubic-bezier easeOutCirc
      }
    })
  };

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-full uppercase">
            Professional Reach
          </span>
          <h2
            className="font-bold tracking-tight mt-4 text-white font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Key Accomplishments
          </h2>
          <p
            className="text-neutral-400 font-medium mt-3 max-w-xl"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
          >
            Evidence of my dedication to quality software engineering.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                custom={index}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
                variants={cardVariants}
                className="group relative bg-[#121212] border border-neutral-900 rounded-3xl p-8 lg:p-10 shadow-2xl transition-all duration-500 hover:border-neutral-800 hover:bg-[#161616]"
              >
                {/* Header of Card */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white border border-neutral-700/50 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className="font-semibold text-neutral-400"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {achievement.title}
                  </span>
                </div>

                {/* Big Stats Indicator */}
                <div className="my-8 text-center">
                  <span className="text-6xl md:text-7xl font-bold tracking-tight text-white block">
                    <CountUpNumber value={achievement.value} suffix={achievement.suffix} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
