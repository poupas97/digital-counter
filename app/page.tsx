"use client";

import { useCallback, useEffect, useState } from "react";
import { CounterCard } from "./components/CounterCard";
import { getCookie, setCookie } from "./lib/cookies";

export default function Home() {
  const [associatedCounter, setAssociatedCounter] = useState<number>(() => {
    const ac = parseInt(getCookie("associatedCounter") || "");
    return Number.isNaN(ac) ? 0 : Math.max(0, ac);
  });
  const [noAssociatedCounter, setNoAssociatedCounter] = useState<number>(() => {
    const nac = parseInt(getCookie("noAssociatedCounter") || "");
    return Number.isNaN(nac) ? 0 : Math.max(0, nac);
  });
  const [active, setActive] = useState<0 | 1>(() => {
    const act = parseInt(getCookie("active") || "", 10);
    return act === 0 || act === 1 ? (act as 0 | 1) : 0;
  });

  useEffect(() => {
    setCookie("associatedCounter", String(associatedCounter));
    setCookie("noAssociatedCounter", String(noAssociatedCounter));
    setCookie("active", String(active));
  }, [associatedCounter, noAssociatedCounter, active]);

  const resetAll = useCallback(() => {
    setAssociatedCounter(0);
    setNoAssociatedCounter(0);
    setActive(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        resetAll();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [resetAll]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50 font-sans dark:bg-black">
      <main className="flex h-screen w-full max-w-none flex-col items-center justify-center py-4 px-4 md:px-8 xl:px-12 bg-white dark:bg-black">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-8 xl:gap-10">
          <CounterCard
            key={`a-${associatedCounter}`}
            label="Sócio"
            value={associatedCounter}
            active={active === 0}
            onIncrement={() => {
              setActive(0);
              setAssociatedCounter((c) => c + 1);
            }}
            onDecrement={() => {
              setActive(0);
              setAssociatedCounter((c) => (c > 0 ? c - 1 : 0));
            }}
          />
          <CounterCard
            key={`b-${noAssociatedCounter}`}
            label="Não sócio"
            value={noAssociatedCounter}
            active={active === 1}
            onIncrement={() => {
              setActive(1);
              setNoAssociatedCounter((c) => c + 1);
            }}
            onDecrement={() => {
              setActive(1);
              setNoAssociatedCounter((c) => (c > 0 ? c - 1 : 0));
            }}
          />
        </div>
      </main>
    </div>
  );
}
