import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import StaggeredMenu from './motion-primitives/StaggeredMenu';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Applications', path: '/applications' },
    { name: 'Open Source', path: '/open-source' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
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
    <nav className="fixed top-4 inset-x-0 mx-auto w-[95%] max-w-7xl z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center min-h-11 text-xl font-display font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
            SR 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rounded-full border border-white/10 dark:border-white/5 bg-background/80 dark:bg-black/40 backdrop-blur-md px-6 py-2 shadow-glass">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.name} className="relative px-3 py-1">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <Link
                    to={item.path}
                    className={`nav-link-animated relative z-10 text-sm transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground font-medium'}`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-11 px-6 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-glass touch-manipulation"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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
    </nav>
  );
};

export default Navigation;