
"use client";

import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      {/* =========================================================
          DESKTOP — ORIGINAL DESIGN (UNCHANGED)
      ========================================================== */}
      <div className="relative hidden min-h-screen overflow-hidden lg:block">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/barber/welcome.png"
          alt="Barber cutting hair"
          fill
          priority
          sizes="100vw"
          className="scale-x-[-1] object-cover object-center"
        />

        {/* DARK OVERLAYS */}
        <div className="absolute inset-0 bg-black/30" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black
            via-black/80
            to-black/10
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-black/20
          "
        />

        {/* MAIN CONTENT */}
        <div
          className="
            relative z-20
            flex min-h-screen
            items-center
            px-24
            xl:px-32
            2xl:px-40
          "
        >
          <div className="max-w-[760px]">
            {/* EYEBROW */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.48em]
                  text-white/45
                  xl:text-[11px]
                "
              >
                Welcome to SNBLENDZ
              </p>
            </div>

            {/* MAIN HEADING */}
            <h2
              className="
                text-[clamp(68px,5.6vw,112px)]
                font-medium
                leading-[0.88]
                tracking-[-0.055em]
              "
            >
              Sharp cuts.
              <br />

              <span className="text-white/55">
                Clean fades.
              </span>

              <br />

              Premium detail.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-9
                max-w-[600px]
                text-[17px]
                font-light
                leading-[1.65]
                text-white/60
                xl:text-[19px]
              "
            >
              More than a haircut. A refined barbering experience built around
              precision, personal style, and the confidence you leave with.
            </p>

            {/* DETAIL */}
            <div className="mt-9 max-w-[560px] border-l border-white/20 pl-6">
              <p className="text-sm leading-7 text-white/45 xl:text-[15px]">
                Tailored fades, restyles and grooming designed around your face
                shape, hair type and individual style.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-11 flex items-center gap-7">
              <a
                 href="https://snblendz.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center gap-6
                  border border-white/55
                  px-8 py-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  transition-all duration-300
                  hover:bg-white
                  hover:text-black
                  xl:px-10
                  xl:text-[11px]
                "
              >
                Book Now

                <span
                  className="
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/30
                "
              >
                Precision • Style • Confidence
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT DETAIL */}
        <div
          className="
            absolute right-14 top-[18%] z-20
            border-l border-white/20
            pl-6
            xl:right-20
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              leading-[1.9]
              tracking-[0.42em]
              text-white/45
            "
          >
            Style
            <br />
            Builds
            <br />
            Confidence
          </p>
        </div>

        {/* BIG FAINT SN */}
        <div
          className="
            pointer-events-none
            absolute bottom-[-20px] right-[7%] z-10
            text-[180px]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-white/[0.035]
            xl:text-[240px]
          "
        >
          SN
        </div>

        {/* BOTTOM LEFT */}
        <div
          className="
            absolute bottom-10 left-14 z-20
            flex items-center gap-5
            xl:left-20
          "
        >
          <div className="h-px w-8 bg-white/30" />

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

          <div className="h-px w-8 bg-white/30" />
        </div>

        {/* BOTTOM CENTER */}
        <div
          className="
            absolute bottom-8 left-1/2 z-20
            flex -translate-x-1/2
            items-center gap-4
          "
        >
          <a
            href="#services"
            aria-label="Scroll to services"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/40
              text-base
              transition
              hover:bg-white
              hover:text-black
            "
          >
            ↓
          </a>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/35
            "
          >
            Scroll
          </span>
        </div>

        {/* BOTTOM RIGHT */}
        <div
          className="
            absolute bottom-10 right-14 z-20
            border-l border-white/20
            pl-5
            xl:right-20
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              leading-[1.8]
              tracking-[0.4em]
              text-white/45
            "
          >
            The
            <br />
            SNBLENDZ
            <br />
            Standard
          </p>
        </div>
      </div>

      {/* =========================================================
          MOBILE — FULL HEIGHT CINEMATIC DESIGN
      ========================================================== */}
      <div
        className="
          relative isolate
          min-h-[100dvh]
          w-full
          overflow-hidden
          bg-[#080808]
          text-white
          lg:hidden
        "
      >
        {/* =====================================================
            BASE GRADIENT
        ====================================================== */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 100% 48% at 80% 40%,
                rgba(112,112,112,0.46) 0%,
                rgba(68,68,68,0.23) 38%,
                rgba(8,8,8,0) 78%
              ),
              linear-gradient(
                180deg,
                #080808 0%,
                #111111 22%,
                #242424 43%,
                #111111 78%,
                #080808 100%
              )
            `,
          }}
        />

        {/* =====================================================
            SEBASTIAN PHOTOGRAPH — CINEMATIC FADE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0
            top-[29%]
            bottom-[-6%]
            overflow-hidden
          "
          style={{
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.20) 11%,
                rgba(0,0,0,0.80) 25%,
                black 38%,
                black 63%,
                rgba(0,0,0,0.80) 75%,
                transparent 100%
              )
            `,
            maskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.20) 11%,
                rgba(0,0,0,0.80) 25%,
                black 38%,
                black 63%,
                rgba(0,0,0,0.80) 75%,
                transparent 100%
              )
            `,
          }}
        >
          <Image
            src="/images/barber/BarberHome.jpg"
            alt="Sebastian working at SNBLENDZ"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-[38%_40%]
            "
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* =====================================================
            SIDE VIGNETTE
        ====================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(0,0,0,0.24) 0%,
                transparent 25%,
                transparent 75%,
                rgba(0,0,0,0.20) 100%
              )
            `,
          }}
        />

        {/* FOOTER DARKENING */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-[24%]
            bg-gradient-to-t
            from-[#080808]
            via-[#080808]/65
            to-transparent
          "
        />

        {/* =====================================================
            MOBILE CONTENT — RESPONSIVE FULL HEIGHT
        ====================================================== */}
        <div
          className="
            relative z-10
            mx-auto
            flex min-h-[100dvh]
            w-full max-w-[480px]
            flex-col
            justify-between
            gap-10
            px-7
            pt-[clamp(48px,8dvh,80px)]
            pb-[max(32px,env(safe-area-inset-bottom))]
            max-[375px]:px-5
          "
        >
          {/* =================================================
              TOP CONTENT
          ================================================== */}
          <div>
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/55" />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-white/70
                "
              >
                Welcome to SNBLENDZ
              </p>
            </div>

            {/* MAIN HEADING */}
            <h2
              className="
                mt-6
                max-w-[380px]
                text-[clamp(46px,12.3vw,59px)]
                font-semibold
                leading-[0.99]
                tracking-[-0.055em]
                text-white
              "
            >
              The art of
              <br />

              <span className="text-white/60">
                a clean cut.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[345px]
                text-[14px]
                font-light
                leading-[1.7]
                text-white/80
                sm:text-[15px]
              "
            >
              Precision fades, refined detail and a sharp finish.
              Barbering defined by craftsmanship and style.
            </p>
          </div>

          {/* =================================================
              BOTTOM CONTENT
          ================================================== */}
          <div>
            {/* STANDARD LABEL */}
            <div className="flex items-center gap-4">
              <p
                className="
                  shrink-0
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/75
                "
              >
                The SNBLENDZ Standard
              </p>

              <span className="h-px flex-1 bg-white/40" />
            </div>

            {/* BOTTOM HEADING */}
            <h3
              className="
                mt-3
                text-[24px]
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-white
                sm:text-[25px]
              "
            >
              Precision in every detail.
            </h3>

            {/* BOOK APPOINTMENT BUTTON */}
            <a
                href="https://snblendz.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                mt-7
                flex min-h-[58px]
                w-full
                items-center
                justify-between
                border border-white/65
                bg-white/[0.07]
                px-5
                text-white
                backdrop-blur-[3px]
                transition-all duration-300
                hover:border-white
                hover:bg-white/15
                active:bg-white/20
              "
            >
              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Book Appointment
              </span>

              <span
                className="
                  text-[22px]
                  text-white
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
