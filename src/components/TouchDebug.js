
"use client";

import { useEffect, useState } from "react";

export default function TouchDebug() {
  const [jsReady, setJsReady] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [lastTouch, setLastTouch] = useState("None");

  useEffect(() => {
    setJsReady(true);

    function inspectTouch(event) {
      const touch = event.touches?.[0];

      if (!touch) return;

      const element = document.elementFromPoint(
        touch.clientX,
        touch.clientY
      );

      if (!element) {
        setLastTouch("No element detected");
        return;
      }

      const target =
        element.closest("button, a") || element;

      const name =
        target.getAttribute("aria-label") ||
        target.textContent?.trim().slice(0, 35) ||
        target.tagName;

      setLastTouch(`${target.tagName}: ${name}`);
    }

    document.addEventListener(
      "touchstart",
      inspectTouch,
      { capture: true, passive: true }
    );

    return () => {
      document.removeEventListener(
        "touchstart",
        inspectTouch,
        true
      );
    };
  }, []);

  return (
    <div
      className="
        fixed bottom-3 left-3 right-3
        z-[2147483647]
        rounded-xl
        border border-white/30
        bg-black/95
        p-3
        text-white
        shadow-2xl
        md:hidden
      "
      style={{ pointerEvents: "auto" }}
    >
      <p className="text-[11px] font-bold uppercase tracking-wider">
        iPhone Touch Test
      </p>

      <p className="mt-2 text-[12px]">
        JavaScript:{" "}
        <strong>
          {jsReady ? "ACTIVE" : "NOT ACTIVE"}
        </strong>
      </p>

      <p className="text-[12px]">
        Test button taps: {tapCount}
      </p>

      <p className="mt-1 break-words text-[11px] text-white/70">
        Last touched: {lastTouch}
      </p>

      <button
        type="button"
        onClick={() => setTapCount((count) => count + 1)}
        className="
          mt-3
          min-h-[44px] w-full
          rounded-lg bg-white
          px-4
          text-[12px]
          font-bold text-black
        "
      >
        TEST TAP
      </button>
    </div>
  );
}
