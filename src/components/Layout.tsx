import { useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
};

export default Layout;