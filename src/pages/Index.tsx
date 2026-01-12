import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { LatestSection } from "@/components/home/LatestSection";

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <FeaturedSection />
        <div className="container-editorial">
          <div className="divider-double" />
        </div>
        <LatestSection />
      </PageTransition>
    </Layout>
  );
};

export default Index;
