import Button from "@/components/Button";
import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Wrap className="py-6 lg:py-9">
        <div className="flex gap-4 items-center jusify-center lowercase text-xl font-semibold lg:text-2xl">
          <Image
            className="
            w-10 h-10 animate-rock
            lg:w-12 lg:h-12
            "
            src="/bonsjoerd.svg"
            alt="Bonsjoerd"
            width={48}
            height={48}
            priority
          />
          BonSjoerd
        </div>
      </Wrap>

      <Wrap className="flex flex-col-reverse lg:flex-row gap-x-15 items-center lg:items-start xl:-mb-30">
        <div className="pt-10 pb-15 lg:py-15 max-w-[480px] lg:w-[40%]">
          <h2 className="text-6xl mb-6 xs:text-[80px] xs:mb-10">
            Hello, I am Sjoerd
          </h2>
          <p className="xs:mb-10">
            I am a freelance designer &amp; web developer from the Netherlands,
            living in Sarlat-la-Canéda in the south of France. I'm still
            learning French, but I am good at{" "}
            <a href="#services">branding, design &amp; web development</a>. In
            my free time I am{" "}
            <a
              href="https://www.youtube.com/channel/UCNHwMsWwnJHmLAcJgup1-EQ"
              target="blank"
            >
              renovating
            </a>{" "}
            our 150 year old house.
          </p>
          <Button href="#contact">Get in touch</Button>
        </div>
        <div className="w-full max-w-[480px] lg:max-w-[660px] lg:w-[55%] lg:mb-15 xl:mb-0">
          <Image
            src="/sjoerd.jpg"
            className="photo rounded-xl z-1"
            alt="Sjoerd Boerrigter"
            width={600}
            height={720}
            sizes="(max-width: 530px) 100vw, (max-width: 1023px) 450px, 600px"
            priority
          />
        </div>
      </Wrap>

      <div className="bg-yellow-50 pt-15 pb-30 xl:pt-45" id="services">
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
              I like to help businesses to define their brand identity and
              present themselves in an attractive way. I can help you to stand
              out to your ideal clients and use the internet to attract new
              customers.
            </p>
            <p>
              I have {new Date().getFullYear() - 2008} years experience as
              design &amp; web development and I love working with{" "}
              <strong>Sketch</strong>, <strong>React</strong>,{" "}
              <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and{" "}
              <strong>WordPress</strong>. So don't hesitate to{" "}
              <a href="#contact">contact</a> me if you want to grow your
              business!
            </p>
          </div>
        </Wrap>

        <Wrap>
          <div className="w-full p-10 shadow-lg bg-white text-center rounded-lg">
            <p>
              I'll put some projects that I am proud of here when I have time...
              😅
            </p>
          </div>
        </Wrap>
      </div>

      <div className="bg-green-700 text-white -mt-1 pt-1" id="contact">
        <Wrap>
          <div id="contact" className="bg-green-600 -mt-15 p-10 rounded-xl">
            <h2 className="text-[50px] leading-tight mb-6 xl:text-[60px]">
              Get in touch
            </h2>
            <p>
              Don't hesitate to contact me if you need help with branding,
              design or web development. I am happy to help where I can!
            </p>
            <Button className="mb-[30px]" href="mailto:sjoerd@bonsjoerd.fr">
              Send me an e-mail
            </Button>
            <p>
              <strong>Sjoerd Boerrigter</strong>
              <br />
              13 Côte de Ravat
              <br />
              24200 Sarlat-la-Canéda
              <br />
              La France
            </p>
            <p>Siret: 98494519600017</p>
            <p>
              <a className="text-white" href="mailto:sjoerd@bonsjoerd.fr">
                sjoerd@bonsjoerd.fr
              </a>
              <br />
              <a className="text-white" href="tel:+31646277318">
                +31 646 277 318
              </a>
            </p>
          </div>

          <div className="text-center py-8">
            &copy; {new Date().getFullYear()} - Sjoerd Boerrigter
          </div>
        </Wrap>
      </div>
    </>
  );
}
