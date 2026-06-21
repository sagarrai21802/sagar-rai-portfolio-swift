
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 pb-8 bg-background border-t border-border overflow-hidden">
      {/* Huge Name Banner */}
      <div className="w-full select-none overflow-hidden">
        <h1 className="text-[15.5vw] font-black tracking-tighter text-center leading-[0.85] uppercase bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 dark:from-white dark:via-zinc-300 dark:to-zinc-700 bg-clip-text text-transparent font-display select-none transition-all duration-700 hover:tracking-normal cursor-default">
          SAGAR RAI
        </h1>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 relative z-10">
        <p className="text-sm text-muted-foreground font-body">
          © {currentYear} Sagar Rai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
