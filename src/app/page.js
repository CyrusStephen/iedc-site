
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import VisualDivider from "../components/VisualDivider";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* BACKGROUND LAYERS */}
<div className="absolute inset-0 overflow-hidden">
  
  {/* Glow gradient top */}
  <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[rgba(180,125,70,0.10)] blur-[120px] rounded-full animate-pulse" />

  {/* Glow gradient bottom */}
  <div className="absolute bottom-[-200px] left-1/3 w-[500px] h-[500px] bg-[rgba(180,125,70,0.4)] blur-[120px] rounded-full animate-pulse" />

  {/* Floating orb */}
  <div className="absolute top-1/3 right-[-100px] w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full animate-bounce" />

</div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative z-10">

        <Hero />
        <VisualDivider />
        <HomeContent />
      </div>
    </main>
  );
}