import { Block } from "@/components";
import { getBreakpointValue } from "@/helpers";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

type CardProps = {
  service: string;
};

export const Card = ({ service }: CardProps) => {
  const comp = React.useRef<HTMLDivElement>(null);

  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add(`(max-width: ${getBreakpointValue("md")}px)`, () => {
        gsap.to(`[data-animate='service-card-${service}']`, {
          scrollTrigger: {
            trigger: `[data-animate='service-card-${service}']`,
            start: "top 80%",
            end: "top 20%",
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
    });

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Block
      border
      padding
      backgroundColor
      className="md:flex-1 text-tertiary h-[400px] aspect-[5/3] md:aspect-[auto] group @container"
    >
      <Block
        padding
        className="flex flex-col h-full overflow-hidden bg-primary rounded-2xl"
      >
        <div ref={comp} data-animate={`service-card-${service}`}>
          <h2 className="text-4xl">{service}</h2>
          <div
            className={`absolute bottom-0 left-0 flex-1 w-full transition-all duration-200 ease-in-out bg-secondary group-hover:h-1/2 drop-shadow-[0px_-10px_52px_rgba(0,0,0,0.25)] ${
              reveal ? "h-1/2" : "h-full"
            }`}
          >
            <Image
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1679004011806-37a4fe6bc32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="service-card"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Block>
    </Block>
  );
};
