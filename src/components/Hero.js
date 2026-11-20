export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}
      <video
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/BarberHero.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}
      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/25
          via-transparent
          to-black/45
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="
          relative z-10
          flex h-full w-full
          items-center justify-center
          px-6
          text-center
        "
      >
        <div className="flex flex-col items-center">
          {/* TOP LABEL */}
          <div className="mb-5 flex items-center gap-4">
            <span className="hidden h-px w-8 bg-white/35 sm:block" />

            <p
              className="
                text-[9px]
                font-medium uppercase
                tracking-[0.5em]
                text-white/60
                sm:text-[10px]
                md:text-xs
                lg:text-sm
              "
            >
              Premium Barber Shop
            </p>

            <span className="hidden h-px w-8 bg-white/35 sm:block" />
          </div>

          {/* MAIN HEADING */}
          <h1
            className="
              text-3xl
              font-semibold uppercase
              leading-[1.1]
              tracking-[0.12em]
              text-white

              sm:text-4xl
              md:text-5xl
              md:tracking-[0.14em]
              lg:text-6xl
              xl:text-7xl
            "
          >
            Where Precision
            <br />
            Meets Style
          </h1>

          {/* DIVIDER */}
          <div
            className="
              mt-7
              h-px w-16
              bg-white/40
              md:mt-8
              md:w-20
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
              max-w-[550px]
              text-sm
              font-light
              leading-7
              text-white/65

              md:max-w-[620px]
              md:text-base

              lg:max-w-[680px]
              lg:text-lg
              lg:leading-8
            "
          >
            Clean fades, sharp detail, and a barbering experience built around
            confidence and personal style.
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LEFT
      ====================================================== */}
      <div
        className="
          absolute bottom-10 left-14 z-20
          hidden items-center gap-4
          lg:flex
          xl:left-20
        "
      >
        <span className="h-px w-8 bg-white/30" />

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.4em]
            text-white/45
          "
        >
          Brisbane, Australia
        </p>
      </div>

      {/* =====================================================
          SCROLL BUTTON
      ====================================================== */}
      <div
        className="
          absolute bottom-8 left-1/2 z-20
          -translate-x-1/2
          md:bottom-10
        "
      >
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="
            group
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/50
            text-lg
            text-white/80
            transition-all duration-300

            hover:border-white
            hover:bg-white
            hover:text-black

            md:h-11 md:w-11
            lg:h-12 lg:w-12
          "
        >
          <span
            className="
              transition-transform duration-300
              group-hover:translate-y-1
            "
          >
            ↓
          </span>
        </a>
      </div>

      {/* =====================================================
          BOTTOM RIGHT
      ====================================================== */}
      <div
        className="
          absolute bottom-10 right-14 z-20
          hidden items-center gap-4
          lg:flex
          xl:right-20
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.4em]
            text-white/45
          "
        >
          Precision • Style • Confidence
        </p>

        <span className="h-px w-8 bg-white/30" />
      </div>
    </section>
  );
}