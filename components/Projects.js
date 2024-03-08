import Wrap from "@/components/Wrap";

export default function Projects() {
  const projects = [
    {
      title: "Maison 1870",
      services: "Branding, design & web development",
      link: "https://maison1870.com/",
    },
    {
      title: "Keizers tegels & sanitair",
      services: "Webdesign & development",
      link: "https://www.keizerssanitair.nl/",
    },
    {
      title: "Actief Twente",
      services: "Branding, webdesign & development",
      link: "https://www.actieftwente.nl/",
    },
    {
      title: "Android Planet",
      services: "Agile web development",
      link: "https://www.androidplanet.nl/",
    },
    {
      title: "The Flavor of Happiness",
      services: "Branding",
      link: "/theflavorofhappiness.pdf",
    },
    {
      title: "DartsKing",
      services: "Agile web development",
      link: "https://dartsking.nl/",
    },

    {
      title: "Naris",
      services: "UX/UI Design",
      link: "/naris.pdf",
    },
    {
      title: "Ecommerce News",
      services: "Agile web development",
      link: "https://ecommercenews.eu/",
    },
    {
      title: "Streaming like a boss",
      services: "Branding, webdesign & development",
      link: "https://www.streaminglikeaboss.nl/",
    },
    {
      title: "Dutch Shape",
      services: "Web development",
      link: "https://www.dutch-shape.nl/",
    },
    {
      title: "B&O Leselschade",
      services: "Branding, webdesign & development",
      link: "https://www.juristenkantoor.nl/",
    },
    {
      title: "Menkehorst Kwekerijën",
      services: "Webdesign & development",
      link: "https://www.menkehorst.nl/",
    },
    {
      title: "Z-wave",
      services: "Web development",
      link: "https://www.z-wave.com/",
    },
    {
      title: "SW Vastgoedverbetering",
      services: "Web development",
      link: "https://www.swbv.nl/",
    },
    {
      title: "VDM Cars",
      services: "Web development",
      link: "https://www.vdmcars.de/",
    },
    {
      title: "ESS Easy Drain",
      services: "Webdesign & development",
      link: "https://www.easydrain.com/",
    },
    {
      title: "Velda",
      services: "Webdesign & development",
      link: "https://www.velda.com/",
    },
    {
      title: "Quality bookings",
      services: "Webdesign & development",
      link: "https://www.quality-bookings.nl/",
    },
    // @todo add this project when redesign is live
    // {
    //   title: "Smartphone.nl",
    //   services: "Agile web development",
    //   link: "https://www.smartphone.nl/",
    // },
    // @todo add this project when redesign is live
    // {
    //   title: "SKIM",
    //   services: "Webdesign & development",
    //   link: "https://www.skimgroup.com/",
    // },
  ];

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
          <p>
            I like to help businesses to define their brand identity and present
            themselves in an attractive way. I can help you to stand out to your
            ideal clients and use the internet to attract new customers.
          </p>
          <p>
            I have {new Date().getFullYear() - 2008} years experience as design
            &amp; web developer, building modern websites using{" "}
            <strong>Sketch</strong>, <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and{" "}
            <strong>WordPress</strong>. So don't hesitate to{" "}
            <a href="#contact">contact me</a> if you want to grow your business!
          </p>
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
            <div className="aspect-square p-10 shadow-lg bg-white rounded-lg mb-5 group-hover:shadow-xl transition-shadow">
              <div className="aspect-square flex items-center justify-center p-5 font-normal italic text-gray-600">
                I'll add an image here
                <br /> when I have time... 😅
              </div>
            </div>
            <h3 className="font-semibold text-lg group-hover:text-green-500 flex justify-center items-center">
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
            </h3>
            <p className="font-normal text-base text-gray-600">
              {project.services}
            </p>
          </a>
        ))}
      </Wrap>
    </section>
  );
}
