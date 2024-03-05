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

      <Wrap className="flex flex-col-reverse lg:flex-row gap-x-15 items-center lg:items-start lg:-mb-30">
        <div className="py-15 max-w-[480px] lg:w-[40%]">
          <h2 className="h1">Hello, I am Sjoerd</h2>
          <p>
            I am a creative designer &amp; web developer from the Netherlands,
            living in Sarlat-la-Canéda in the south of France. I am still
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
        </div>
        <div className="w-full max-w-[480px] lg:max-w-[660px] lg:w-[55%]">
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

      <div className="bg-yellow-50 py-15 lg:pt-45" id="services">
        <Wrap>
          <h1 className="h2">Branding, design & web development</h1>
          <p>
            I like to help businesses to define their brand identity and present
            themselves in an attractive way. I can help you to stand out to your
            ideal clients and use the internet to attract new customers.
          </p>
          <p>
            I have 16 years experience with branding, design & web development.
            So don't hesitate to <a href="#contact">contact</a> me if you want
            to grow your business. I am happy to help where I can!
          </p>
        </Wrap>
      </div>

      <div className="bg-green-600 text-white py-15" id="contact">
        <Wrap>
          <h2>Get in touch</h2>
          <p>
            Don't hesitate to contact me if you need help with branding, design
            or web development. I am happy to help where I can!
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
            <a className="text-white" href="mailto:sjoerd@bonsjoerd.fr">
              sjoerd@bonsjoerd.fr
            </a>
            <br />
            <a className="text-white" href="tel:+31646277318">
              +31 646 277 318
            </a>
          </p>
        </Wrap>
      </div>
    </>
  );
}
