import "./main.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "BonSjoerd - Branding, design & web development",
  description:
    "Sjoerd Boerrigter, freelance designer & web developer from the Netherlands, living in Sarlat-la-Canéda in the south of France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-4PR8PVW5Y1" />
    </html>
  );
}
