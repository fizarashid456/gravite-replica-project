import { Loader } from "@/components/sections/Loader";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { Journal } from "@/components/sections/Journal";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
