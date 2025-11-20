import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleCTAClick = () => {
    // Placeholder link - replace with actual video page URL
    window.location.href = "#";
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <div className="bg-secondary border-2 border-border rounded-sm p-6 md:p-10 text-center shadow-sm">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
          Watch The Free Video Presentation
        </h3>
        
        <Button 
          onClick={handleCTAClick}
          className="bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          WATCH THE VIDEO PRESENTATION
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-sm text-muted-foreground mt-4">
          Clicking will open the official explanation video.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
