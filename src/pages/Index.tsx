import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleContent from "@/components/ArticleContent";
import CTASection from "@/components/CTASection";
import StickyFooterCTA from "@/components/StickyFooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ArticleContent />
        <CTASection />
      </main>
      <Footer />
      <StickyFooterCTA />
    </div>
  );
};

export default Index;
