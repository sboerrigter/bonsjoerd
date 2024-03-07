import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Header() {
  return (
    <header>
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
    </header>
  );
}
