import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  if (dictionary) {
    let metadata = {
      ...dictionary.metadata,
      metadataBase: new URL("https://www.bonsjoerd.fr"),
    };

    return metadata;
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
