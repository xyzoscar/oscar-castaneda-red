import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/home/hero";
import { PortfolioGrid } from "@/components/sections/shared/portfolio-grid";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PortfolioGrid />
      <Footer />
    </div>
  );
}
