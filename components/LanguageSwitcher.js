"use client";

import Link from "next/link";

const languages = [
  {
    locale: "fr",
    label: "Français",
  },
  {
    locale: "nl",
    label: "Nederlands",
  },
];
export default function LanguageSwitcher() {
  return (
    <div className="relative font-semibold group">
      <div className="bg-yellow-300 group-hover:bg-yellow-500 cursor-pointer px-6 py-3 rounded-full flex gap-1 items-center">
        <span className="xs:hidden">en</span>
        <span className="hidden xs:block">English</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <div className="hidden group-hover:flex absolute right-0 top-12 bg-yellow-300 shadow-lg rounded-lg min-w-45 flex-col">
        {languages.map((language) => (
          <Link
            href="/"
            locale={language.locale}
            key={language.locale}
            className="px-6 py-2 first:pt-4 last:pb-4 hover:underline"
          >
            {language.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
