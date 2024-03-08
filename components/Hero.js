import Button from "@/components/Button";
import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Hero({ content }) {
  return (
    <section>
      <Wrap className="flex flex-col-reverse lg:flex-row gap-x-15 items-center lg:items-start xl:-mb-30">
        <div className="pt-10 pb-15 lg:py-15 max-w-[480px] lg:w-[40%]">
          <h2 className="text-6xl mb-6 xs:text-[80px] xs:mb-10 xl:mb-15">
            {content.title}
          </h2>
          <p
            className="xs:mb-10"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
          <Button href="#contact">{content.buttonLabel}</Button>
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
