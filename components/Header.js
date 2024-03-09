"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Header({ lang }) {
  const [flip, setFlip] = useState(false);

  return (
    <header>
      <Wrap className="py-6 lg:py-9 flex justify-between">
        <div
          className="flex gap-4 items-center jusify-center lowercase text-xl font-semibold lg:text-2xl group cursor-pointer"
          onClick={() => setFlip(true)}
        >
          <svg
            onClick={() => setFlip(true)}
            onAnimationEnd={() => setFlip(false)}
            className={`w-10 h-10 lg:w-12 lg:h-12 ${
              flip ? "animate-flip" : "animate-rock"
            }`}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m48 24c0 13.254834-10.745166 24-24 24s-24-10.745166-24-24z"
              fill="#ffc34d"
            />
            <path
              d="m4.5 0c2.48528137 0 4.5 2.01471863 4.5 4.5v16.5h-9v-16.5l.00489799-.2118357c.11061292-2.38692778 2.08082868-4.2881643 4.49510201-4.2881643z"
              fill="#099"
            />
            <path
              d="m7.96875 10.5-.00021985-.017435c-1.10979369-.1385002-1.96853015-1.0852483-1.96853015-2.232565s.85873646-2.09406476 1.96853015-2.23256496l.00021985-.01743504h4.5l-.0002198.01743504c.0922064-.01150718.1861458-.01743504.2814698-.01743504 1.2426407 0 2.25 1.00735931 2.25 2.25s-1.0073593 2.25-2.25 2.25c-.095324 0-.1892634-.0059279-.2814698-.017435l.0002198.017435z"
              fill="#ff7f40"
            />
          </svg>
          BonSjoerd
        </div>

        <LanguageSwitcher lang={lang} />
      </Wrap>
    </header>
  );
}
