"use client";

import { useState } from "react";

export default function SeasonalGreeting({ greeting }) {
  const [dismissed, setDismissed] = useState(false);

  if (!greeting) {
    return null;
  }

  const now = new Date();
  const startDate = new Date(greeting.startDate);
  const endDate = new Date(greeting.endDate);

  const isActive =
    greeting.active &&
    now >= startDate &&
    now <= endDate;

  if (!isActive || dismissed) {
    return null;
  }

  return (
    <div className="relative z-50 bg-[#0b2545] px-10 py-3 text-center text-white">
      <p className="text-sm leading-6 sm:text-base">
        <span className="font-bold text-cyan-300">
          {greeting.title}
        </span>

        <span className="mx-2 hidden sm:inline">—</span>

        <span className="block sm:inline">
          {greeting.message}
        </span>
      </p>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Close seasonal greeting"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xl text-white/80 transition hover:bg-white/10 hover:text-white"
      >
        ×
      </button>
    </div>
  );
}