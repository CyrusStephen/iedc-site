import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import VisualDivider from "../components/VisualDivider";

export default function Home() {
  return (
    <main className="site-bg relative min-h-screen overflow-hidden text-white">
  <div className="content-layer relative z-10">
        <Hero />
        <VisualDivider />
        <HomeContent />
      </div>
    </main>
  );
}