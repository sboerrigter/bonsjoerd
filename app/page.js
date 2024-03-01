import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex gap-6 items-center jusify-center">
          <Image
            src="/bonsjoerd.svg"
            alt="Bonsjoerd"
            width={48}
            height={48}
            priority
          />
          <p>BonSjoerd</p>
        </div>
      </header>
      <section>
        <h1>Hello, I am Sjoerd</h1>
        <p>
          I am a creative freelancer from the Netherlands, living in
          Sarlat-la-Canéda in the south of France. I am still learning French,
          but I am good at branding, design and web development. In my free time
          I am renovating our 150 year old house.
        </p>
        <h2>Branding, design & web development</h2>
        <p>
          I like to help businesses to define their brand identity and present
          themselves in an attractive way. I can help you to stand out to your
          ideal clients and use the internet to attract new customers.
        </p>
        <p>
          I have 16 years experience with branding, design & web development. So
          don't hesitate to contact me if you want to grow your business. I am
          happy to help where I can!
        </p>
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
      </section>
    </>
  );
}
