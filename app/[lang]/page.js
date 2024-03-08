import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({ params: { lang } }) {
  if (lang == "nl") {
    return {
      title: "NL BonSjoerd - Branding, design & web development",
      description:
        "Sjoerd Boerrigter, freelance designer & web developer from the Netherlands, living in Sarlat-la-Canéda in the south of France.",
    };
  } else {
    return {
      title: "EN BonSjoerd - Branding, design & web development",
      description:
        "Sjoerd Boerrigter, freelance designer & web developer from the Netherlands, living in Sarlat-la-Canéda in the south of France.",
    };
  }
}

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <Hero content={dictionary.hero} />
      <Projects content={dictionary.projects} />
      <Footer content={dictionary.footer} />
    </>
  );
}
