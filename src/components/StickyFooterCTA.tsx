import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyFooterCTA = () => {
  const handleCTAClick = () => {
    // Placeholder link - replace with actual video page URL
    window.location.href = "#";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-border shadow-2xl py-3 px-4 z-50 md:hidden">
      <Button 
        onClick={handleCTAClick}
        className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-sm py-6 rounded-sm shadow-lg"
      >
        WATCH THE VIDEO NOW
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default StickyFooterCTA;
