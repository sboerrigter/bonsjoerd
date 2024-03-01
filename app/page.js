import Image from "next/image";
import Link from "next/link";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Wrap className="py-6 md:py-9">
        <div
          className="flex gap-4 items-center jusify-center lowercase text-xl font-semibold
          md:text-2xl"
        >
          <Image
            className="
            w-10 h-10
            md:w-12 md:h-12
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
      <Wrap>
        <h2 className="h1">Hello, I am Sjoerd</h2>
        <p>
          I am a creative designer &amp; web developer from the Netherlands,
          living in Sarlat-la-Canéda in the south of France. I am still learning
          French, but I am good at{" "}
          <a href="#services">branding, design &amp; web development</a>. In my
          free time I am{" "}
          <Link href="https://www.youtube.com/channel/UCNHwMsWwnJHmLAcJgup1-EQ">
            renovating
          </Link>{" "}
          our 150 year old house.
        </p>
      </Wrap>
      <div className="py-[60px]" id="services">
        <Wrap>
          <h1 className="h2">Branding, design & web development</h1>
          <p>
            I like to help businesses to define their brand identity and present
            themselves in an attractive way. I can help you to stand out to your
            ideal clients and use the internet to attract new customers.
          </p>
          <p>
            I have 16 years experience with branding, design & web development.
            So don't hesitate to contact me if you want to grow your business. I
            am happy to help where I can!
          </p>
        </Wrap>
      </div>
      <Wrap>
        <h2>Get in touch</h2>
        <p>
          Don't hesitate to contact me if you need help with branding, design or
          web development. I am happy to help where I can!
        </p>
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
          <a href="mailto:bonjour@bonsjoerd.fr">bonjour@bonsjoerd.fr</a>
          <br />
          <a href="tel:+31646277318">+31 646 277 318</a>
        </p>
      </Wrap>
    </>
  );
}
