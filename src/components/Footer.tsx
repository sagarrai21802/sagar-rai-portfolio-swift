
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/sagarrai21802', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/sagar-rai-ios', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:sagarrai9893@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              title={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {currentYear} Sagar Rai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
