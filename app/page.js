import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export const metadata = {
  title: "BonSjoerd - Branding, design & web development",
  description:
    "Sjoerd Boerrigter, freelance designer & web developer from the Netherlands, living in Sarlat-la-Canéda in the south of France.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}
