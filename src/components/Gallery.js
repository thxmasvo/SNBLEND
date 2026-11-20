
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

/* =========================================================
   SNBLENDZ GALLERY — 16 PHOTOGRAPHS
========================================================= */

const photos = [
  {
    id: "fade1",
    src: "/images/gallery/fade1.png",
    title: "Low Fade Texture",
    category: "fades",
  },
  {
    id: "burst1",
    src: "/images/gallery/burst1.png",
    title: "Burst Fade",
    category: "bursts",
  },
  {
    id: "design1",
    src: "/images/gallery/design1.png",
    title: "Hair Design",
    category: "designs",
  },
  {
    id: "textured1",
    src: "/images/gallery/textured1.png",
    title: "Textured Cut",
    category: "textured",
  },
  {
    id: "fade2",
    src: "/images/gallery/fade2.png",
    title: "Precision Fade",
    category: "fades",
  },
  {
    id: "burst2",
    src: "/images/gallery/burst2.png",
    title: "Burst Fade 02",
    category: "bursts",
  },
  {
    id: "design2",
    src: "/images/gallery/design2.png",
    title: "Hair Design 02",
    category: "designs",
  },
  {
    id: "textured2",
    src: "/images/gallery/textured2.png",
    title: "Textured Cut 02",
    category: "textured",
  },
  {
    id: "fade3",
    src: "/images/gallery/fade3.png",
    title: "Fade 03",
    category: "fades",
  },
  {
    id: "burst3",
    src: "/images/gallery/burst3.png",
    title: "Burst Fade 03",
    category: "bursts",
  },
  {
    id: "design3",
    src: "/images/gallery/design3.png",
    title: "Hair Design 03",
    category: "designs",
  },
  {
    id: "textured3",
    src: "/images/gallery/textured3.png",
    title: "Textured Cut 03",
    category: "textured",
  },
  {
    id: "fade4",
    src: "/images/gallery/fade4.png",
    title: "Fade 04",
    category: "fades",
  },
  {
    id: "burst4",
    src: "/images/gallery/burst4.png",
    title: "Burst Fade 04",
    category: "bursts",
  },
  {
    id: "design4",
    src: "/images/gallery/design4.png",
    title: "Hair Design 04",
    category: "designs",
  },
  {
    id: "textured4",
    src: "/images/gallery/textured4.png",
    title: "Textured Cut 04",
    category: "textured",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "fades", label: "Fades" },
  { id: "bursts", label: "Burst Fades" },
  { id: "designs", label: "Designs" },
  { id: "textured", label: "Textured" },
];

/* =========================================================
   PHOTO CARD
========================================================= */

function GalleryCard({
  photo,
  featured = false,
  showExpand = false,
  onOpen,
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${photo.title}`}
      style={{ touchAction: "manipulation" }}
      className={`
        group relative block min-w-0 w-full
        cursor-pointer overflow-hidden
        rounded-[15px]
        border border-white/[0.18]
        bg-[#161616]
        text-left
        outline-none
        transition-colors duration-300
        hover:border-white/50
        focus-visible:ring-2
        focus-visible:ring-white
        lg:rounded-[20px]
        ${
          featured
            ? "col-span-2 aspect-[2.45/1] lg:row-span-2 lg:aspect-auto"
            : "col-span-1 aspect-[1.55/1] lg:aspect-auto"
        }
      `}
    >
      <Image
        src={photo.src}
        alt={`Haircut by SNBLENDZ — ${photo.title}`}
        fill
        sizes={
          featured
            ? "(max-width: 1023px) 92vw, 48vw"
            : "(max-width: 1023px) 46vw, 25vw"
        }
        className="
          pointer-events-none
          object-cover object-center
          brightness-[0.80]
          saturate-[0.78]
          contrast-[1.06]
          transition-transform duration-700
          group-hover:scale-[1.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t
          from-black/60
          via-black/[0.04]
          to-black/10
        "
      />

      {featured && (
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            flex items-end justify-between
            gap-3 px-4 pb-4
            min-[390px]:px-5
            min-[390px]:pb-5
            lg:px-8 lg:pb-8
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="
                text-[9px] font-semibold uppercase
                tracking-[0.17em] text-white
                lg:text-[12px]
              "
            >
              {photo.title}
            </span>

            <span className="h-px w-6 bg-white/70" />
          </div>

          <span
            className="
              flex h-7 w-7 shrink-0
              items-center justify-center
              rounded-[6px]
              border border-white/35
              bg-black/35
              text-[16px] text-white
              lg:h-9 lg:w-9
            "
          >
            ↗
          </span>
        </div>
      )}

      {!featured && showExpand && (
        <span
          className="
            pointer-events-none
            absolute bottom-2.5 right-2.5
            flex h-7 w-7
            items-center justify-center
            rounded-[6px]
            border border-white/25
            bg-black/40
            text-[16px] text-white
            lg:h-9 lg:w-9
          "
        >
          ↗
        </span>
      )}

      {!featured && (
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            hidden items-center
            bg-gradient-to-t
            from-black/70 to-transparent
            px-4 pb-4 pt-10
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
            lg:flex
          "
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            {photo.title}
          </span>
        </div>
      )}
    </button>
  );
}

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const touchStartX = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter(
          (photo) => photo.category === activeFilter
        );

  const visiblePhotos =
    activeFilter === "all"
      ? filteredPhotos.slice(0, 5)
      : filteredPhotos;

  const featuredLayout = activeFilter === "all";

  const activePhoto =
    selectedIndex === null
      ? null
      : filteredPhotos[selectedIndex];

  const viewerOpen = selectedIndex !== null;

  /* =========================================================
     FILTER — MOUSE, TOUCH AND KEYBOARD
  ========================================================= */

  function changeFilter(filterId) {
    if (filterId === activeFilter) return;

    setActiveFilter(filterId);
    setSelectedIndex(null);
  }

  /* =========================================================
     PHOTO VIEWER
  ========================================================= */

  function openPhoto(photo) {
    const index = filteredPhotos.findIndex(
      (item) => item.id === photo.id
    );

    if (index < 0) return;

    previousFocusRef.current = document.activeElement;
    setSelectedIndex(index);
  }

  function closeViewer() {
    setSelectedIndex(null);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus?.();
    });
  }

  function nextPhoto() {
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (current + 1) % filteredPhotos.length
    );
  }

  function previousPhoto() {
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (
            current - 1 + filteredPhotos.length
          ) % filteredPhotos.length
    );
  }

  /* KEYBOARD + SCROLL LOCK */

  useEffect(() => {
    if (!viewerOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          (current + 1) % filteredPhotos.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          (current - 1 + filteredPhotos.length) %
          filteredPhotos.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewerOpen, filteredPhotos.length]);

  /* IPHONE SWIPING */

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const difference =
      touchStartX.current -
      event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextPhoto();
      } else {
        previousPhoto();
      }
    }

    touchStartX.current = null;
  }

  return (
    <>
      <section
        aria-labelledby="gallery-heading"
        className="
          relative isolate
          w-full overflow-hidden
          bg-[#080808] text-white
        "
      >
        {/* =====================================================
            BACKGROUND — CANNOT INTERCEPT TOUCHES
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            z-0
          "
          style={{
            background: `
              radial-gradient(
                ellipse 88% 42% at 95% 9%,
                rgba(155,155,155,0.30) 0%,
                rgba(90,90,90,0.18) 28%,
                rgba(40,40,40,0.07) 56%,
                transparent 82%
              ),
              radial-gradient(
                ellipse 75% 40% at 78% 50%,
                rgba(85,85,85,0.12) 0%,
                transparent 78%
              ),
              radial-gradient(
                ellipse 100% 25% at 50% 98%,
                rgba(105,105,105,0.12) 0%,
                transparent 78%
              ),
              linear-gradient(
                180deg,
                #080808 0%,
                #111111 22%,
                #171717 46%,
                #101010 72%,
                #080808 100%
              )
            `,
          }}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-28 top-[-100px]
            z-0
            h-[380px] w-[380px]
            rounded-full
            bg-white/[0.06]
            blur-[110px]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[160px]
          "
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 55%,
                rgba(0,0,0,0.10) 78%,
                rgba(0,0,0,0.30) 100%
              )
            `,
          }}
        />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            relative z-10
            mx-auto w-full
            max-w-[1480px]
            px-[clamp(16px,4.5vw,24px)]
            pb-12 pt-9
            sm:px-8 sm:pb-20 sm:pt-16
            lg:px-16 lg:pb-28 lg:pt-28
            xl:px-20
          "
        >
          {/* HEADING */}

          <div
            className="
              lg:grid
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end lg:gap-16
            "
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-white/65" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-white/75 lg:text-[11px]">
                  Gallery
                </p>
              </div>

              <h2
                id="gallery-heading"
                className="
                  mt-5
                  text-[clamp(35px,10.5vw,52px)]
                  font-semibold
                  leading-[0.97]
                  tracking-[-0.06em]
                  text-white
                  lg:mt-8
                  lg:text-[clamp(64px,5.8vw,92px)]
                "
              >
                <span className="block">
                  A selection of
                </span>

                <span className="block text-white/50">
                  recent cuts.
                </span>
              </h2>
            </div>

            <div
              className="
                mt-5 max-w-[460px]
                border-l border-white/40
                pl-4
                lg:mb-2 lg:mt-0 lg:pl-7
              "
            >
              <p
                className="
                  text-[13px]
                  font-light leading-[1.75]
                  text-white/80
                  min-[390px]:text-[14px]
                  lg:text-[18px]
                "
              >
                A look at some of my recent work —
                from clean fades to textured styles,
                each cut is tailored to the individual.
              </p>
            </div>
          </div>

          {/* =================================================
              IPHONE FILTER BAR — TOUCH FIX
          ================================================== */}

          <div
            role="group"
            aria-label="Filter haircut gallery"
            className="
              relative z-30
              mt-6
              flex w-full
              items-center
              justify-between
              gap-1
              pointer-events-auto
              lg:mt-11
              lg:w-auto
              lg:justify-start
              lg:gap-5
            "
            style={{
              touchAction: "manipulation",
            }}
          >
            {filters.map((filter) => {
              const selected = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => changeFilter(filter.id)}
                  onPointerUp={(event) => {
                    // Additional iPhone touch support.
                    // onClick remains for mouse and keyboard.
                    if (event.pointerType === "touch") {
                      changeFilter(filter.id);
                    }
                  }}
                  style={{
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  className="
                    group relative z-30
                    flex min-h-[44px]
                    min-w-0 shrink-0
                    cursor-pointer
                    items-center justify-center
                    rounded-[8px]
                    p-0
                    pointer-events-auto
                    select-none
                    outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                  "
                >
                  <span
                    className={`
                      pointer-events-none
                      flex h-[31px]
                      items-center justify-center
                      whitespace-nowrap
                      rounded-[7px]
                      px-1.5
                      text-[clamp(8px,2.15vw,10px)]
                      font-semibold
                      uppercase
                      tracking-[0.07em]
                      transition-all duration-300
                      lg:h-[35px]
                      lg:px-4
                      lg:text-[11px]
                      lg:tracking-[0.16em]
                      ${
                        selected
                          ? "bg-white px-2.5 text-[#080808]"
                          : "text-white/60 group-hover:text-white"
                      }
                    `}
                  >
                    {filter.id === "bursts" ? (
                      <>
                        <span className="min-[380px]:hidden">
                          Burst
                        </span>

                        <span className="hidden min-[380px]:inline">
                          Burst Fades
                        </span>
                      </>
                    ) : (
                      filter.label
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              FILTERED GALLERY IMAGES
          ================================================== */}

          <div
            key={activeFilter}
            className={`
              relative z-10
              mt-4
              grid grid-cols-2
              gap-[9px]
              lg:mt-8 lg:gap-4
              ${
                featuredLayout
                  ? "lg:h-[520px] lg:grid-cols-4 lg:grid-rows-2"
                  : "lg:grid-cols-4 lg:auto-rows-[250px]"
              }
            `}
          >
            {visiblePhotos.map((photo, index) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                featured={featuredLayout && index === 0}
                showExpand={
                  index === visiblePhotos.length - 1
                }
                onOpen={() => openPhoto(photo)}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            z-0 h-16
            bg-gradient-to-t
            from-[#080808]
            to-transparent
          "
        />
      </section>

      {/* =========================================================
          FULLSCREEN PHOTO VIEWER
      ========================================================== */}

      {activePhoto &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${activePhoto.title}`}
            className="
              fixed inset-0 z-[10000]
              flex flex-col
              bg-black/[0.98]
              text-white
            "
          >
            {/* VIEWER HEADER */}

            <div
              className="
                flex items-center justify-between
                gap-4
                border-b border-white/10
                px-5 pb-4
                pt-[max(18px,env(safe-area-inset-top))]
                sm:px-8
              "
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  SNBLENDZ GALLERY
                </p>

                <p className="mt-1 text-[16px] font-medium">
                  {activePhoto.title}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeViewer}
                aria-label="Close photo viewer"
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-white/25
                  text-[23px] text-white
                  hover:bg-white/10
                "
              >
                ×
              </button>
            </div>

            {/* FULL IMAGE */}

            <div
              className="relative min-h-0 w-full flex-1"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={activePhoto.id}
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="100vw"
                className="object-contain p-3 sm:p-8"
              />
            </div>

            {/* NAVIGATION */}

            <div
              className="
                flex items-center justify-between
                border-t border-white/10
                px-6 pt-4
                pb-[max(18px,env(safe-area-inset-bottom))]
                sm:px-10
              "
            >
              <button
                type="button"
                onClick={previousPhoto}
                aria-label="Previous photograph"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-white/25
                  text-lg text-white
                  hover:bg-white/10
                "
              >
                ←
              </button>

              <span className="text-[11px] font-medium tracking-[0.24em] text-white/65">
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(filteredPhotos.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photograph"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-white/25
                  text-lg text-white
                  hover:bg-white/10
                "
              >
                →
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
