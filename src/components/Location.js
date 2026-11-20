
"use client";

import {
  MapPin,
  ArrowUpRight,
  LockKeyhole,
} from "lucide-react";

const MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=152.950%2C-27.612%2C152.992%2C-27.571&layer=mapnik";

const VIEW_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Inala%2C%20QLD%204077%2C%20Australia";

export default function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="
        relative isolate
        overflow-hidden
        bg-[#080808]
        text-white
        scroll-mt-16
      "
    >
      {/* SHARED DARK BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 85% 48% at 80% 25%,
              rgba(120,120,120,0.16) 0%,
              rgba(65,65,65,0.07) 45%,
              transparent 85%
            ),
            linear-gradient(
              180deg,
              #080808 0%,
              #111111 40%,
              #0c0c0c 75%,
              #080808 100%
            )
          `,
        }}
      />

      <div
        className="
          relative z-10
          mx-auto max-w-[1480px]
          px-5 pb-0 pt-12
          sm:px-8 sm:pt-16
          lg:px-16 lg:pt-24
          xl:px-20
        "
      >
        {/* SECTION HEADING */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-white/55" />

            <p
              className="
                text-[10px]
                font-semibold uppercase
                tracking-[0.3em]
                text-white/65
              "
            >
              The Location
            </p>
          </div>

          <div
            className="
              mt-6 flex flex-col gap-5
              lg:flex-row lg:items-end
              lg:justify-between lg:gap-12
            "
          >
            <h2
              id="location-heading"
              className="
                text-[clamp(43px,11vw,58px)]
                font-semibold
                leading-[0.97]
                tracking-[-0.055em]
                lg:text-[clamp(65px,5.8vw,92px)]
              "
            >
              Find me in
              <br />
              <span className="text-white/45">
                Inala.
              </span>
            </h2>

            <p
              className="
                max-w-[380px]
                border-l border-white/25
                pl-4
                text-[13px]
                font-light leading-[1.8]
                text-white/65
                lg:mb-2 lg:text-[16px]
              "
            >
              Based in Inala, Brisbane. I operate
              independently from a private home studio,
              offering appointments in a relaxed,
              one-on-one environment.
            </p>
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div
          className="
            relative isolate
            h-[490px] w-full
            overflow-hidden
            rounded-[18px]
            border border-white/[0.13]
            bg-[#151515]
            sm:h-[530px]
            lg:h-[600px]
            lg:rounded-[22px]
          "
        >
          {/* STREET MAP */}
          <iframe
            title="General map of Inala, Brisbane"
            src={MAP_URL}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="
              pointer-events-none
              absolute inset-0
              h-full w-full
              border-0
              lg:pointer-events-auto
            "
            style={{
              filter:
                "grayscale(1) invert(0.91) hue-rotate(180deg) brightness(0.76) contrast(1.18)",
            }}
          />

          {/* MAP VIGNETTE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(0,0,0,0.30) 0%,
                  transparent 27%,
                  rgba(0,0,0,0.08) 50%,
                  rgba(0,0,0,0.56) 100%
                ),
                linear-gradient(
                  90deg,
                  rgba(0,0,0,0.20),
                  transparent 38%,
                  rgba(0,0,0,0.12)
                )
              `,
            }}
          />

          {/* INALA TITLE BAR */}
          <div
            className="
              absolute inset-x-0 top-0 z-20
              flex h-[66px]
              items-center justify-between
              border-b border-white/15
              bg-[#0b0b0b]/95
              px-5 backdrop-blur-xl
              sm:px-8
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-white/50" />

              <p
                className="
                  text-[17px] font-bold
                  uppercase tracking-[-0.035em]
                  text-white
                  sm:text-[21px]
                "
              >
                INALA
              </p>
            </div>

            <span
              className="
                text-[9px]
                font-semibold uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Brisbane, QLD
            </span>
          </div>

          {/* GENERAL SUBURB HIGHLIGHT */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-[40%] z-10
              flex h-[195px] w-[195px]
              -translate-x-1/2
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/50
              bg-white/[0.07]
              shadow-[0_0_0_14px_rgba(255,255,255,0.035),0_0_65px_rgba(255,255,255,0.15)]
              sm:h-[255px] sm:w-[255px]
              lg:top-[45%]
              lg:h-[300px] lg:w-[300px]
            "
          >
            <div
              className="
                flex h-[65%] w-[65%]
                flex-col items-center
                justify-center
                rounded-full
                border border-white/25
                bg-black/15
                text-center
              "
            >
              <MapPin
                size={23}
                strokeWidth={1.5}
                className="mb-2 text-white"
              />

              <span
                className="
                  text-[12px] font-bold
                  uppercase tracking-[0.22em]
                  text-white
                "
              >
                Inala
              </span>

              <span
                className="
                  mt-1 text-[8px]
                  font-medium uppercase
                  tracking-[0.12em]
                  text-white/75
                "
              >
                Approximate Area
              </span>
            </div>
          </div>

          {/* INFORMATION CARD */}
          <div
            className="
              absolute bottom-4
              left-4 right-4 z-20
              overflow-hidden
              rounded-[13px]
              border border-white/20
              bg-[#111111]/95
              p-5
              shadow-[0_12px_45px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              sm:bottom-6 sm:left-6 sm:right-auto
              sm:w-[390px] sm:p-6
              lg:bottom-8 lg:left-8
            "
          >
            {/* BRAND */}
            <p
              className="
                text-[15px]
                font-bold uppercase
                tracking-[0.22em]
                text-white
              "
            >
              SNBLENDZ
            </p>

            <div className="my-4 h-px w-full bg-white/10" />

            {/* GENERAL LOCATION */}
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-white/75"
              />

              <div>
                <p className="text-[16px] font-semibold text-white">
                  Inala, Brisbane
                </p>

                <p
                  className="
                    mt-1 text-[11px]
                    uppercase tracking-[0.15em]
                    text-white/45
                  "
                >
                  Queensland 4077
                </p>
              </div>
            </div>

            {/* PRIVATE STUDIO NOTICE */}
            <div className="mt-4 flex items-start gap-3">
              <LockKeyhole
                size={16}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-white/60"
              />

              <p
                className="
                  text-[12px]
                  font-light leading-[1.65]
                  text-white/65
                "
              >
                Private home studio. Exact address
                provided following booking confirmation.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <a
                href={VIEW_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex min-h-[44px]
                  items-center justify-between
                  gap-2
                  border border-white/25
                  px-3
                  text-[9px] font-semibold
                  uppercase tracking-[0.1em]
                  text-white/80
                  transition-colors
                  hover:bg-white/10
                "
              >
                View Area
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://snblendz.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex min-h-[44px]
                  items-center justify-between
                  gap-2
                  border border-white/65
                  bg-white/[0.09]
                  px-3
                  text-[9px] font-semibold
                  uppercase tracking-[0.1em]
                  text-white
                  transition-colors
                  hover:bg-white/20
                "
              >
                Book Now
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* VERY SHORT SECTION TRANSITION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          relative h-3
          bg-[#080808]
          lg:h-5
        "
      />
    </section>
  );
}
