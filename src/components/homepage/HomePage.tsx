import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";

interface HomePageProps {
  showFeatureCards?: boolean;
}

export default function HomePage({ showFeatureCards = false }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <HeroSection />
        <FeatureCards enabled={showFeatureCards} />
      </div>
    </div>
  );
} 