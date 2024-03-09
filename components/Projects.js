import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Projects({ content }) {
  const projects = [
    {
      title: "Maison 1870",
      services: "Branding, design & web development",
      link: "https://maison1870.com/",
      image: "/maison-1870.jpg",
    },
    {
      title: "Keizers tegels & sanitair",
      services: "Webdesign & development",
      link: "https://www.keizerssanitair.nl/",
      image: "/keizers.jpg",
    },
    {
      title: "iPhoned",
      services: "Agile web development",
      link: "https://www.iphoned.nl/",
      image: "/iphoned.jpg",
    },
    {
      title: "Naris",
      services: "UX/UI Design",
      link: "/naris.pdf",
      image: "/naris.jpg",
    },
    {
      title: "The Flavor of Happiness",
      services: "Branding",
      link: "/the-flavor-of-happiness.pdf",
      image: "/the-flavor-of-happiness.jpg",
    },
    {
      title: "Actief Twente",
      services: "Branding, webdesign & development",
      link: "https://www.actieftwente.nl/",
      image: "/actief-twente.jpg",
    },
    {
      title: "DartsKing",
      services: "Agile web development",
      link: "https://dartsking.nl/",
      image: "/dartsking.jpg",
    },
    {
      title: "Streaming like a boss",
      services: "Branding, webdesign & development",
      link: "https://www.streaminglikeaboss.nl/",
      image: "/streaming-like-a-boss.jpg",
    },
    {
      title: "ESS Easy Drain",
      services: "Webdesign & development",
      link: "https://www.easydrain.com/",
      image: "/ess.jpg",
    },
    {
      title: "Ecommerce News",
      services: "Agile web development",
      link: "https://ecommercenews.eu/",
      image: "/ecommerce-news.jpg",
    },
    {
      title: "Menkehorst Kwekerijën",
      services: "Webdesign & development",
      link: "https://www.menkehorst.nl/",
      image: "/menkehorst.jpg",
    },
    {
      title: "Dutch Shape",
      services: "Web development",
      link: "https://www.dutch-shape.nl/",
      image: "/dutch-shape.jpg",
    },
    {
      title: "Velda",
      services: "Webdesign & development",
      link: "https://www.velda.com/",
      image: "/velda.jpg",
    },
    {
      title: "Quality bookings",
      services: "Webdesign & development",
      link: "https://www.quality-bookings.nl/",
      image: "/quality-bookings.jpg",
    },
    {
      title: "B&O Leselschade",
      services: "Branding, webdesign & development",
      link: "https://www.juristenkantoor.nl/",
      image: "/bo-letselschade.jpg",
    },
    {
      title: "SW Vastgoedverbetering",
      services: "Web development",
      link: "https://www.swbv.nl/",
      image: "/sw.jpg",
    },
    {
      title: "VDM Cars",
      services: "Web development",
      link: "https://www.vdmcars.de/",
      image: "/vdm-cars.jpg",
    },
    {
      title: "Z-wave",
      services: "Web development",
      link: "https://www.z-wave.com/",
      image: "/z-wave.jpg",
    },
    // @todo add these projects when they are live
    // {
    //   title: "Smartphone.nl",
    //   services: "Agile web development",
    //   link: "https://www.smartphone.nl/",
    // image: "/smartphone.jpg",
    // },
    // {
    //   title: "SKIM",
    //   services: "Webdesign & development",
    //   link: "https://www.skimgroup.com/",
    // image: "/skimgroup.jpg",
    // },
  ];

  const experience = new Date().getFullYear() - 2008;

  return (
    <section className="bg-yellow-50 pt-15 pb-30 xl:py-45" id="services">
      <Wrap className="flex flex-col md:flex-row gap-x-15 mb-15">
        <h1
          className="
            text-[40px] leading-tight mb-6
            md:w-[40%] md:mb-0
            lg:text-[50px]
            xl:text-[60px]
          "
        >
          Branding, design&nbsp;&amp; web development
        </h1>

        <div className="md:w-[55%]">
          <p dangerouslySetInnerHTML={{ __html: content.text1 }} />
          <p
            dangerouslySetInnerHTML={{
              __html: content.text2.replace("XXXX", experience),
            }}
          ></p>
        </div>
      </Wrap>

      <Wrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {projects.map((project) => (
          <a
            className="text-gray-800 hover:no-underline text-center group"
            target="_blank"
            rel="nofollow"
            href={project.link}
            key={project.title}
          >
            <div className="p-5 shadow-lg bg-white rounded-lg mb-5 group-hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden w-full">
                <Image
                  src={project.image}
                  className="group-hover:scale-105 transition-transform duration-300 easy-in-out w-full aspect-square"
                  alt={project.title}
                  width={240}
                  height={240}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1200px) 33vw, 340px"
                />
              </div>
            </div>
            <h2 className="font-semibold text-lg flex justify-center items-center">
              {project.title}

              <span className="inline-block w-0 h-auto overflow-visible opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="square"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </h2>
            <p className="font-normal text-base text-gray-600">
              {project.services}
            </p>
          </a>
        ))}
      </Wrap>
    </section>
  );
}
