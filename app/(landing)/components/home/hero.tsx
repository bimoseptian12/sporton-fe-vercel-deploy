import Header from "../layouts/header";
import Image from "next/image";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex ">
      <div className="relative self-center ">
        <Image
          src="/images/img-basketball.png"
          className="absolute grayscale -top-30 "
          alt=""
          width={520}
          height={520}
        ></Image>
        <div className="w1/2 relative ml-40 ">
          <h2 className="text-[16px] italic text-primary">Friday Sale, 50%</h2>
          <h1 className="font-extrabold text-[95px] leading-[101px] italic bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent ">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTWEAR
          </h1>
          <p className="mt-12 w-1/2 ">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-8">
            <Button>
              Explorer More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon play video"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          className="absolute right-[250] top-1/2 -translate-y-1/2"
          src="/images/img-hero.svg"
          width={650}
          height={950}
          alt=""
        ></Image>

        <Image
          className="absolute -right-[200px] top-1/2 -translate-y-1/2"
          src="/images/img-ornament-hero.svg"
          alt="Lingkaran"
          width={420}
          height={420}
        ></Image>
      </div>
    </section>
  );
};
export default Hero;
