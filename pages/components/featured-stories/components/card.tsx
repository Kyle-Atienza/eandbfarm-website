import { Block, Button } from "@/components";
import { getBreakpointValue } from "@/helpers";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Card = ({
  main,
  position,
}: {
  main?: boolean;
  position: number;
}) => {
  const comp = React.useRef<HTMLDivElement>(null);

  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add(`(max-width: ${getBreakpointValue("md")}px)`, () => {
        gsap.to(`[data-animate='featured-story-card-${position}']`, {
          scrollTrigger: {
            trigger: `[data-animate='featured-story-card-${position}']`,
            start: "center 70%",
            end: "center 30%",
            onEnter: () => setReveal(true),
            onLeave: () => setReveal(false),
            onEnterBack: () => setReveal(true),
            onLeaveBack: () => setReveal(false),
          },
        });

        return () => {
          setReveal(false);
        };
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        className={`flex flex-col overflow-hidden group ${
          main ? "h-[350px]" : "h-[250px] md:h-full"
        } @container`}
        ref={comp}
        data-animate={`featured-story-card-${position}`}
      >
        <div className="flex-[2]">
          <Image
            className={`absolute top-0 left-0 object-cover object-center w-full transition-all duration-200 ease-in-out h-1/3 group-hover:h-full ${
              reveal ? "h-full" : ""
            }`}
            alt="temp-image"
            src="https://images.unsplash.com/photo-1678951680486-5b8e5f81324c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            width={500}
            height={500}
          />
        </div>
        <Block
          margin="x y"
          className={`transition-transform duration-200 ease-in-out cursor-pointer flex-[3] group-hover:-translate-y-1/2 group-hover:drop-shadow-2xl hover:rotate-3 ${
            reveal ? "-translate-y-1/2 drop-shadow-2xl rotate-3" : ""
          }`}
        >
          <div className="absolute max-w-[300px] md:max-w-[450px] w-full left-1/2 -translate-x-1/2">
            <Block padding className="w-full rounded-xl bg-primary">
              <div className="flex flex-col text-tertiary">
                <h2 className="text-2xl font-ranille">
                  NutriPage Wins National YFC
                </h2>
                <p className="mt-2 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et.
                </p>
                {main ? <Button className="mt-6 ">Read More</Button> : null}
              </div>
            </Block>
          </div>
        </Block>
      </div>
    </>
  );
};
