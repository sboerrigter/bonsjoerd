import Button from "@/components/Button";
import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Hero() {
  return (
    <section>
      <Wrap className="flex flex-col-reverse lg:flex-row gap-x-15 items-center lg:items-start xl:-mb-30">
        <div className="pt-10 pb-15 lg:py-15 max-w-[480px] lg:w-[40%]">
          <h2 className="text-6xl mb-6 xs:text-[80px] xs:mb-10 xl:mb-15">
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
            className="photo rounded-xl z-1 bg-green-700"
            alt="Sjoerd Boerrigter"
            width={600}
            height={720}
            sizes="(max-width: 530px) 100vw, (max-width: 1023px) 450px, 600px"
            priority
          />
        </div>
      </Wrap>
    </section>
  );
}
