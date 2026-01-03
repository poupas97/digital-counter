"use client";

import React from "react";

type Props = {
  value: number;
  active: boolean;
  onClick: () => void;
  label: string;
};

export function CounterCard({ value, active, onClick, label }: Props) {
  return (
    <div className={`flex flex-col items-center gap-4 blink-3s`}>
      <span
        className={`font-extrabold leading-none tracking-tight text-center 
        ${active ? "text-emerald-700 dark:text-emerald-200" : "text-white dark:text-white"}
        text-[14vw] sm:text-[10vw] md:text-[8vw] xl:text-[5vw] 2xl:text-[4.5vw]`}
      >
        {label}
      </span>

      <div
        role="button"
        aria-pressed={active}
        onClick={onClick}
        className={`flex items-center justify-center rounded-3xl border-4 font-black transition-colors 
        h-[32vh] w-[90vw] text-[26vw]
        sm:h-[36vh] sm:w-[82vw] sm:text-[22vw]
        md:h-[60vh] md:w-[44vw] md:text-[16vw]
        xl:h-[66vh] xl:w-[40vw] xl:text-[12vw]
        2xl:h-[68vh] 2xl:w-[36vw] 2xl:text-[11vw]
        ${
          active
            ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200"
            : "border-zinc-800 bg-zinc-800 text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
