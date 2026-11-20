
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="
        fixed left-0 top-0 z-[9999]
        w-full
        border-b border-white/[0.07]
        bg-black/30
        px-6 py-3
        text-white
        backdrop-blur-xl
        md:px-10
        lg:px-14 lg:py-3
        xl:px-20
      "
    >
      <div className="relative flex w-full items-center justify-between">

        {/* LEFT - LOGO */}
        <a
          href="#home"
          aria-label="SNBLENDZ Home"
          className="
            relative z-10
            shrink-0
            transition-opacity duration-300
            hover:opacity-75
          "
        >
          <Image
            src="/logo/LogoText.png"
            alt="SNBLENDZ"
            width={400}
            height={100}
            priority
            className="
              h-auto
              w-[135px]
              md:w-[150px]
              lg:w-[165px]
              xl:w-[175px]
            "
          />
        </a>

        {/* CENTRE - NAV LINKS */}
        <div
          className="
            absolute left-1/2 top-1/2
            hidden
            -translate-x-1/2 -translate-y-1/2
            items-center
            md:flex
            md:gap-8
            lg:gap-11
            xl:gap-14
          "
        >
          <a
            href="#about"
            className="
              text-[10px]
              font-medium uppercase
              tracking-[0.3em]
              text-white/55
              transition-colors duration-300
              hover:text-white
              lg:text-[11px]
            "
          >
            About
          </a>

          <a
            href="#services"
            className="
              text-[10px]
              font-medium uppercase
              tracking-[0.3em]
              text-white/55
              transition-colors duration-300
              hover:text-white
              lg:text-[11px]
            "
          >
            Services
          </a>

          <a
            href="#gallery"
            className="
              text-[10px]
              font-medium uppercase
              tracking-[0.3em]
              text-white/55
              transition-colors duration-300
              hover:text-white
              lg:text-[11px]
            "
          >
            Gallery
          </a>
        </div>

        {/* RIGHT - BOOK BUTTON */}
        <a
          href="https://snblendz.setmore.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment with SNBLENDZ"
          className="
            relative z-10
            border border-white/30
            bg-white/[0.03]
            px-5 py-2.5
            text-[9px]
            font-semibold uppercase
            tracking-[0.3em]
            text-white/85
            transition-all duration-300

            hover:border-white
            hover:bg-white
            hover:text-black

            md:px-6
            lg:text-[10px]
          "
        >
          Book
        </a>

      </div>
    </nav>
  );
}
