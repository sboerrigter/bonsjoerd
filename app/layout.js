import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "BonSjoerd",
  description:
    "Sjoerd Boerrigter, freelance designer & web developer from the Netherlands, living in Sarlat-la-Canéda in the south of France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
