"use client";
import { useEffect } from "react";

type Props = {
  value: number;
  active: boolean;
  label: string;
  onIncrement: () => void;
  onDecrement: () => void;
};

const audio = new Audio("/leon-roar.mp3");

export function CounterCard({ value, active, label, onIncrement, onDecrement }: Props) {
  useEffect(() => {
    audio.play();
  }, []);

  return (
    <div className={`flex flex-col items-center gap-4 blink-3s`}>
      <span
        className={`font-extrabold leading-none tracking-tight text-center 
        ${active ? "text-emerald-700 dark:text-emerald-200" : "text-white dark:text-white"}
        text-[14vw] sm:text-[10vw] md:text-[8vw] xl:text-[5vw] 2xl:text-[4.5vw]`}
      >
        {label}
      </span>

      <div className="relative">
        <div
          aria-pressed={active}
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

        <div className="absolute right-4 bottom-4 flex flex-row items-center justify-center gap-2">
          <button
            onClick={onIncrement}
            className={`flex items-center justify-center rounded-none border font-black transition-colors 
            h-[4vh] w-[4vh] text-[2.6vh]
            sm:h-[5vh] sm:w-[5vh] sm:text-[2.8vh]
            md:h-[6vh] md:w-[6vh] md:text-[3vh]
            xl:h-[7vh] xl:w-[7vh] xl:text-[3.2vh]
            2xl:h-[8vh] 2xl:w-[8vh] 2xl:text-[3.4vh]
            ${
              active
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200"
                : "border-zinc-800 bg-zinc-800 text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            } ${!onIncrement ? "opacity-50 cursor-not-allowed" : "opacity-80 hover:opacity-100 shadow-sm"}`}
          >
            +
          </button>
          <button
            onClick={onDecrement}
            className={`flex items-center justify-center rounded-none border font-black transition-colors 
            h-[4vh] w-[4vh] text-[2.6vh]
            sm:h-[5vh] sm:w-[5vh] sm:text-[2.8vh]
            md:h-[6vh] md:w-[6vh] md:text-[3vh]
            xl:h-[7vh] xl:w-[7vh] xl:text-[3.2vh]
            2xl:h-[8vh] 2xl:w-[8vh] 2xl:text-[3.4vh]
            ${
              active
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200"
                : "border-zinc-800 bg-zinc-800 text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            } ${!onDecrement ? "opacity-50 cursor-not-allowed" : "opacity-80 hover:opacity-100 shadow-sm"}`}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
