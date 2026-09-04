import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position instantly on route change to avoid slide animation glitch
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default Layout;