import "@/app/main.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }, { lang: "nl" }];
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang} className="antialiased scroll-smooth">
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-4PR8PVW5Y1" />
    </html>
  );
  ß;
}
