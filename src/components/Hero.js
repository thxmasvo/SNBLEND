import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/barber-hero.mov" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Logo icon */}
        <Image
          src="/logo/Logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mb-4 w-16 md:w-24 lg:w-32"
        />

        {/* Text logo */}
        <Image
          src="/logo/LogoText.png"
          alt="text"
          width={600}
          height={120}
          className="max-w-[260px] md:max-w-[420px] lg:max-w-[650px]"
        />

        {/* Subtitle */}
        <p className="mt-6 text-xs md:text-sm lg:text-base xl:text-lg tracking-[0.35em] uppercase text-white/80">
        Premium Barber Shop
        </p>

        {/* Tagline */}
        <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-white/60">
        Where precision meets style.
        </p>

      </div>

      {/* Bottom CTA */}
      <div
        className="absolute left-1/2 z-20 -translate-x-1/2"
        style={{ bottom: "30px" }}
      >
        <a
          href="#book"
          className="group relative inline-block text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
        >
          Book Appointment

          <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white/30 transition-all duration-300 group-hover:bg-white" />
        </a>
      </div>

    </section>
  );
}