import { AboutSection } from "../components/About";
import { Hero } from "../components/Hero";
import Review from "../components/Review";
import { SectionTwo } from "../components/SectionTwo";
import Shorts from "../components/Shorts";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />

      <AboutSection />
      <Videos />

      <Shorts />
      <Review />
    </div>
  );
}
