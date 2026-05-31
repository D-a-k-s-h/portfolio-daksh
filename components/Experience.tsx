import { workExperience } from "@/data";
import React from "react";
import { Button, MovingBorder } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 place-items-center">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={64}
                height={64}
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:test-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
