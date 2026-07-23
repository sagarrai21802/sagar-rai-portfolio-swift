import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position and trigger page transition on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div ref={containerRef} key={location.pathname} className="min-h-screen page-transition">
      {children}
    </div>
  );
};

export default Layout;