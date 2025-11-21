const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8 px-4 mt-12 mb-16 md:mb-0">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs md:text-sm leading-relaxed mb-4 text-center">
          Copyright 2026 Christian Survival Watch. This site is not part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm">
          <a href="https://josephwell.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="https://josephwell.com/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="mailto:support@josephwell.com" className="hover:text-foreground transition-colors underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
