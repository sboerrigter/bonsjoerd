import Button from "@/components/Button";
import Socials from "./Socials";
import Wrap from "@/components/Wrap";

export default function Footer({ content }) {
  return (
    <footer className="bg-green-700 text-white -mt-1 pt-1" id="contact">
      <Wrap>
        <div
          id="contact"
          className="bg-green-600 -mt-15 p-5 pb-10 2xs:p-10 2xs:pb-15 xl:p-15 xl:pb-20 xl:pt-15 rounded-xl"
        >
          <h2 className="text-[50px] leading-tight mb-6 xl:text-[60px] ">
            {content.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-x-10 xl:gap-x-15 gap-y-10">
            <div>
              <p dangerouslySetInnerHTML={{ __html: content.text }}></p>
              <Button href="mailto:sjoerd@bonsjoerd.fr">
                <span className="xs:hidden">{content.buttonLabelShort}</span>
                <span className="hidden xs:inline">{content.buttonLabel}</span>
              </Button>
            </div>

            <div className="lg:w-[540px] flex-shrink-0 flex flex-col sm:flex-row gap-x-10 xl:gap-x-15 gap-y-7.5">
              <div className="sm:w-1/2">
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
              </div>

              <div className="sm:w-1/2">
                <p>
                  <a
                    className="text-white hover:text-white"
                    href="mailto:sjoerd@bonsjoerd.fr"
                  >
                    sjoerd@bonsjoerd.fr
                  </a>
                  <br />
                  <a
                    className="text-white hover:text-white"
                    href="tel:+31646277318"
                  >
                    +31 646 277 318
                  </a>
                </p>

                <Socials />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8">
          &copy; {new Date().getFullYear()} - Sjoerd Boerrigter
        </div>
      </Wrap>
    </footer>
  );
}
