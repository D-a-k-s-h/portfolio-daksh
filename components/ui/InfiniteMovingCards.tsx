"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string,
    badge: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-screen z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full  rounded-2xl border border-b-0 shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4, 7, 29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%), rgba(12, 14, 35, 1) 100%",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="flex flex-col justify-between user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-full w-[calc(100%+4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] font-normal text-neutral-800 dark:text-white">
                {item.quote}
              </span>
              {item?.badge && (
                <span>
                  <Image
                    width={100}
                    height={100}
                    className="mt-4"
                    src={item?.badge}
                    alt={item?.name}
                  />
                </span>
              )}
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-row gap-2">
                  <div className="me-3">
                    <Image
                      width={60}
                      height={60}
                      className="rounded-full"
                      src={item?.img}
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl leading-[1.6] font-bold text-neutral-500 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-white-200">
                      {item.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
