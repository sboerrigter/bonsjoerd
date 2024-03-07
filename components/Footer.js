import Button from "@/components/Button";
import Wrap from "@/components/Wrap";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white -mt-1 pt-1" id="contact">
      <Wrap>
        <div id="contact" className="bg-green-600 -mt-15 p-10 rounded-xl">
          <h2 className="text-[50px] leading-tight mb-6 xl:text-[60px]">
            Get in touch
          </h2>
          <p>
            Don't hesitate to contact me if you need help with branding, design
            or web development. I am happy to help where I can!
          </p>
          <Button className="mb-7.5" href="mailto:sjoerd@bonsjoerd.fr">
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
    </footer>
  );
}
