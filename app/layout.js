import "./main.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-4PR8PVW5Y1" />
    </html>
  );
}
