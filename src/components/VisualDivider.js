import Image from "next/image";

export default function VisualDivider() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
       
<Image
  src="/images/divider.jpg"
  alt="Innovation Space"
  fill
  className="object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

       {/* Top cinematic fade from previous section */}
<div className="pointer-events-none absolute top-0 left-0 z-20 h-45 w-full bg-gradient-to-b from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-3">
            Innovation in Motion
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Where ideas move beyond the classroom
          </h2>
        </div>
      </div>

    </section>
  );
}