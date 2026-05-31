import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaRegFileLines } from "react-icons/fa6";
import ScalesWithImage from "./ui/ScalesImage";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-30 right-65 -scale-x-97 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-10 right-10 -scale-x-110 h-[70vh] w-[10vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen absolute top-0 left-0 flex w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[50px_50px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10 justify-between items-center relative my-20 z-10">
        <div className="w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seemless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Daksh, a Mern and Next.js Developer based in India.{" "}
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow className="text-lg" />}
                position="right"
              />
            </a>

            <a
              href="/DakskKumarNSUT.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="View Resume"
                icon={<FaRegFileLines />}
                position="right"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[45vw]">
          <ScalesWithImage src="/profile.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
