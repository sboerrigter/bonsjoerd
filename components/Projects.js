import Wrap from "@/components/Wrap";

export default function Projects() {
  return (
    <section className="bg-yellow-50 pt-15 pb-30 xl:pt-45" id="services">
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

      <Wrap>
        <div className="w-full p-10 shadow-lg bg-white text-center rounded-lg">
          <p>
            I'll put some projects that I am proud of here when I have time...
            😅
          </p>
        </div>
      </Wrap>
    </section>
  );
}
