
/* =========================================================
   SNBLENDZ — MINIMAL PREMIUM FOOTER

   Paste Sebastian's real profile URLs below.
   Empty URLs display icons without linking to
   an incorrect profile.
========================================================= */

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/snblendz/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sebastian.nguyen.316116",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@snblendzz",
  },
];

/* =========================================================
   MONOCHROME SOCIAL MEDIA ICONS
========================================================= */

function SocialIcon({ name }) {
  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="
            M14.2 21V13.8H16.9L17.3 10.4H14.2V8.2
            C14.2 7.2 14.5 6.5 16 6.5H17.6V3.4
            C17.3 3.4 16.2 3.3 14.9 3.3
            C12.2 3.3 10.4 5 10.4 8.1V10.4H7.6
            V13.8H10.4V21H14.2Z
          "
        />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3.5v11.3a4.3 4.3 0 1 1-4.3-4.3" />
        <path d="M14 3.5c1.1 2.8 3 4.3 6 4.6" />
      </svg>
    );
  }

  return null;
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative isolate
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* =====================================================
          CONTINUOUS BACKGROUND

          Starts at the same #080808 colour as the
          bottom of Location.js.

          Gradually brightens into charcoal, then
          fades back into black.
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse 78% 60% at 80% 78%,
              rgba(135,135,135,0.14) 0%,
              rgba(90,90,90,0.07) 42%,
              transparent 85%
            ),
            radial-gradient(
              ellipse 65% 55% at 12% 72%,
              rgba(90,90,90,0.09) 0%,
              transparent 85%
            ),
            linear-gradient(
              180deg,
              #080808 0%,
              #090909 12%,
              #0c0c0c 35%,
              #111111 64%,
              #0c0c0c 88%,
              #080808 100%
            )
          `,
        }}
      />

      {/* SOFT LIGHT BLOOM */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[-80px] top-[35%] z-0
          h-[200px] w-[200px]
          rounded-full
          bg-white/[0.025]
          blur-[95px]
          lg:h-[350px] lg:w-[350px]
        "
      />

      {/* =====================================================
          FOOTER CONTENT — COMPACT
      ====================================================== */}
      <div
        className="
          relative z-10
          mx-auto
          max-w-[1050px]
          px-5 pb-5 pt-6
          sm:px-8 sm:pt-8
          lg:px-12 lg:pb-7 lg:pt-10
        "
      >
        <div
          className="
            grid grid-cols-2
            gap-5
            sm:gap-12
            lg:gap-28
          "
        >
          {/* =================================================
              OPENING HOURS
          ================================================== */}
          <div className="min-w-0">
            {/* TITLE */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 shrink-0 bg-white/35" />

              <h3
                className="
                  text-[9px]
                  font-semibold uppercase
                  tracking-[0.16em]
                  text-white/80
                  sm:text-[11px]
                  sm:tracking-[0.2em]
                "
              >
                Opening Hours
              </h3>
            </div>

            {/* TIMES */}
            <div className="mt-5">
              <p
                className="
                  text-[11px]
                  font-medium
                  leading-[1.6]
                  text-white/55
                  sm:text-[12px]
                "
              >
                Tuesday — Saturday
              </p>

              <p
                className="
                  mt-1
                  text-[13px]
                  font-semibold
                  leading-[1.5]
                  text-white
                  sm:text-[15px]
                "
              >
                12:00 PM — 7:00 PM
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-medium
                  text-white/55
                  sm:text-[12px]
                "
              >
                Sunday — Monday
              </p>

              <p
                className="
                  mt-1
                  text-[13px]
                  font-medium
                  text-white/65
                  sm:text-[15px]
                "
              >
                Closed
              </p>
            </div>
          </div>

          {/* =================================================
              FOLLOW ME — ICONS ONLY
          ================================================== */}
          <div className="min-w-0">
            {/* TITLE */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 shrink-0 bg-white/35" />

              <h3
                className="
                  text-[9px]
                  font-semibold uppercase
                  tracking-[0.16em]
                  text-white/80
                  sm:text-[11px]
                  sm:tracking-[0.2em]
                "
              >
                Follow Me
              </h3>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => {
                const styles = `
                  group
                  flex h-9 w-9
                  items-center justify-center
                  rounded-[8px]
                  border border-white/20
                  bg-white/[0.035]
                  text-white/75
                  transition-all duration-300
                  sm:h-11 sm:w-11
                `;

                return social.url ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`SNBLENDZ on ${social.name}`}
                    title={social.name}
                    className={`${styles} hover:border-white/50 hover:bg-white/10 hover:text-white`}
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ) : (
                  <span
                    key={social.name}
                    role="img"
                    aria-label={social.name}
                    title={social.name}
                    className={styles}
                  >
                    <SocialIcon name={social.name} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
        <div
          className="
            mt-7
            border-t border-white/10
            pt-5
            lg:mt-9
          "
        >
          <p
            className="
              text-center
              text-[9px]
              font-medium uppercase
              tracking-[0.14em]
              text-white/40
              sm:text-[10px]
            "
          >
            © {new Date().getFullYear()} SNBLENDZ.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
