import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import StaggeredMenu from './motion-primitives/StaggeredMenu';

// 1. Home Icon
const HomeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5z" />
  </svg>
);

// 2. Projects Bulb Icon (matching sketch screenshot)
const BulbIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 16.5h6" />
    <path d="M10 19h4" />
    <path d="M15 13.5c1-1 2-2.5 2-4.5a5 5 0 1 0-10 0c0 2 1 3.5 2 4.5.7.7 1 1.5 1 2.5h4c0-1 .3-1.8 1-2.5z" />
    <line x1="12" y1="1.5" x2="12" y2="3.5" />
    <line x1="7.2" y1="3.2" x2="8.4" y2="5" />
    <line x1="16.8" y1="3.2" x2="15.6" y2="5" />
    <line x1="4.2" y1="7.5" x2="6.2" y2="8.5" />
    <line x1="19.8" y1="7.5" x2="17.8" y2="8.5" />
    <line x1="3.5" y1="13" x2="5.5" y2="13" />
    <line x1="20.5" y1="13" x2="18.5" y2="13" />
    <line x1="5.2" y1="18.5" x2="7" y2="17.2" />
    <line x1="18.8" y1="18.5" x2="17" y2="17.2" />
  </svg>
);

// 3. Applications Icon (custom outline app launcher from screenshot)
const ApplicationIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4.5" />
    <rect x="6" y="5.8" width="12" height="3" rx="1.5" />
    <circle cx="8" cy="7.3" r="0.8" />
    <rect x="6" y="11" width="2.6" height="2.6" rx="0.7" />
    <rect x="10.7" y="11" width="2.6" height="2.6" rx="0.7" />
    <rect x="15.4" y="11" width="2.6" height="2.6" rx="0.7" />
    <rect x="6" y="15.2" width="2.6" height="2.6" rx="0.7" />
    <rect x="10.7" y="15.2" width="2.6" height="2.6" rx="0.7" />
    <rect x="15.4" y="15.2" width="2.6" height="2.6" rx="0.7" />
  </svg>
);

// 4. Experience Icon (clean person at laptop from screenshot)
const ExperienceIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Head */}
    <circle cx="15" cy="6" r="3.5" />
    {/* Body / Shoulder */}
    <path d="M10.5 15a5.5 5.5 0 0 1 8.5 4" />
    {/* Laptop screen */}
    <rect x="3.5" y="11" width="8" height="6.5" rx="1" transform="skewX(-6)" />
    {/* Laptop base */}
    <path d="M12 17.5h2" />
    {/* Desk line */}
    <path d="M2 20h20" />
  </svg>
);

// 5. Blog Icon (simple clean notepad)
const BlogIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Projects', path: '/projects', icon: BulbIcon },
    { name: 'Applications', path: '/applications', icon: ApplicationIcon },
    { name: 'Experience', path: '/experience', icon: ExperienceIcon },
    { name: 'Blog', path: '/blog', icon: BlogIcon },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sagarrai21802', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sagar-rai-ios', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sagarrai9893@gmail.com', label: 'Email' },
  ];

  const staggeredMenuItems = navItems.map(item => ({
    label: item.name,
    ariaLabel: `Go to ${item.name}`,
    link: item.path
  }));

  const staggeredSocialItems = socialLinks.map(item => ({
    label: item.label,
    link: item.href
  }));

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto w-[95%] max-w-7xl z-[100] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Top Left Website Icon / Avatar */}
          <Link
            to="/"
            className="flex items-center group touch-manipulation focus:outline-none"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-glass transition-transform duration-200 group-hover:scale-105 active:scale-95">
              <img
                src="/display-pic.png"
                alt="Sagar Rai"
                className="w-full h-full rounded-full object-cover border border-white/10"
              />
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Navigation - Pill Container */}
            <div
              className="flex items-center h-[48px] shrink-0 box-border rounded-full border border-white/10 dark:border-white/5 bg-background/80 dark:bg-black/50 backdrop-blur-md px-1.5 shadow-glass"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const IconComponent = item.icon;

                return (
                  <div key={item.name} className="relative flex items-center h-[38px]">
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white -z-10 shadow-sm"
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      />
                    )}

                    <Link
                      to={item.path}
                      className={`relative z-10 flex items-center justify-center gap-2 h-full px-3.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? 'text-black font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Desktop Contact Button - Matches active tab pill height (38px) */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-[38px] shrink-0 box-border px-5 rounded-full bg-white text-black text-sm font-semibold leading-none shadow-glass transition-all duration-200 hover:bg-white/90 touch-manipulation"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <StaggeredMenu
              isFixed={true}
              position="right"
              items={staggeredMenuItems}
              socialItems={staggeredSocialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#000000"
              changeMenuColorOnOpen={true}
              colors={['#1a1a1a', '#222']}
              logoUrl=""
              accentColor="#3b82f6"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;