
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      {/* BACKGROUND GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 85% 65% at 85% 38%,
              rgba(85,85,85,0.16) 0%,
              rgba(35,35,35,0.09) 48%,
              transparent 80%
            ),
            linear-gradient(
              180deg,
              #080808 0%,
              #131313 42%,
              #101010 75%,
              #080808 100%
            )
          `,
        }}
      />

      {/* TOP TRANSITION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-24
          bg-gradient-to-b
          from-[#080808]
          to-transparent
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1440px]
          px-6
          py-20
          sm:px-10
          lg:px-20
          lg:py-28
          xl:px-28
        "
      >
        <div
          className="
            grid grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT — INTRODUCTION + PHOTOGRAPH
          ====================================================== */}
          <div>
            {/* SECTION LABEL */}
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-white/45" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white/55
                "
              >
                About the barber
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-7
                text-[clamp(44px,10.8vw,60px)]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                lg:text-[clamp(56px,5vw,85px)]
              "
            >
              It started
              <br />
              in my
              <br />
              <span className="text-white/45">
                backyard.
              </span>
            </h2>

            {/* PHOTOGRAPH */}
            <div
              className="
                relative
                mt-9
                h-[220px]
                w-full
                overflow-hidden
                bg-[#181818]
                sm:h-[300px]
                lg:mt-12
                lg:h-[500px]
              "
            >
              <Image
                src="/images/barber/CuttingClient.png"
                alt="Sebastian Nguyen cutting hair"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.025]
                "
              />

              {/* CINEMATIC PHOTO GRADIENT */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-black/15
                "
              />

              {/* PHOTO CAPTION */}
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/65
                  "
                >
                  The person behind SNBLENDZ
                </p>

                <p
                  className="
                    mt-2
                    text-[20px]
                    font-medium
                    tracking-[-0.035em]
                    text-white
                    lg:text-[24px]
                  "
                >
                  Sebastian Nguyen
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — SEBASTIAN'S STORY
          ====================================================== */}
          <div className="lg:pt-16">
            {/* SMALL HEADER */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-white/40" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                My story
              </p>
            </div>

            {/* PERSONAL INTRO */}
            <h3
              className="
                mt-6
                max-w-[560px]
                text-[28px]
                font-medium
                leading-[1.18]
                tracking-[-0.04em]
                text-white
                sm:text-[34px]
                lg:text-[clamp(30px,2.7vw,44px)]
              "
            >
              I'm Sebastian.
              <span className="block text-white/50">
                Here's how it all began.
              </span>
            </h3>

            {/* STORY */}
            <div
              className="
                mt-7
                max-w-[570px]
                space-y-5
                text-[14px]
                font-light
                leading-[1.9]
                text-white/65
                sm:text-[15px]
                lg:mt-9
                lg:text-[16px]
              "
            >
              <p>
                I started cutting hair when I was 15, practising in
                my backyard with a pair of clippers and a genuine
                passion for the craft. What started as something
                I enjoyed quickly became something I wanted to
                pursue professionally.
              </p>

              <p>
                I went on to work at a barbershop in Forest Lake,
                then known as Always Will Be Barber. During my
                time there, I became a certified barber and
                eventually worked my way up to head barber.
                I was also proud to be part of the team during
                a period when the shop received nominations for
                Best Barbershop in Brisbane.
              </p>

              <p>
                Today, I work independently from my home studio,
                continuing to build SNBLENDZ around the same
                passion that started it all. For me, it's about
                taking pride in every cut, paying attention to
                the smallest details and making sure everyone
                leaves my chair feeling their best.
              </p>
            </div>

            {/* SUBTLE DIVIDER */}
            <div className="mt-9 h-px w-full bg-white/15" />

            {/* STORY FOOTER */}
            <div
              className="
                mt-6
                flex flex-wrap
                items-center
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-white/75
                  "
                >
                  Sebastian Nguyen
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-light
                    tracking-[0.04em]
                    text-white/40
                  "
                >
                  Founder & Barber — SNBLENDZ
                </p>
              </div>

              <a
                href="#book"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  border-b border-white/35
                  pb-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.19em]
                  text-white
                  transition-colors
                  duration-300
                  hover:border-white
                "
              >
                Book with me

                <span
                  className="
                    text-[18px]
                    font-normal
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-24
          bg-gradient-to-t
          from-[#080808]
          to-transparent
        "
      />
    </section>
  );
}
