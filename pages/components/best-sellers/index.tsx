import React, { useEffect, useState } from "react";
import { Motif, SampleImages } from "@/images";
import Image from "next/image";

import gsap, { Linear } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Draggable from "gsap/dist/Draggable";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { horizontalLoop } from "@/helpers";
import { Item } from "./components";
import { Block, Button } from "@/components";
import { Items } from "./components/items";

export const BestSellers = () => {
  const comp = React.useRef<HTMLDivElement>(null);

  const [scrollSpeed, setScrollSpeed] = useState<number>(1);
  const [activeItem, setActiveItem] = useState<{
    element: HTMLElement;
    index: number;
  }>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(CustomEase);
      gsap.registerPlugin(Draggable);
      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray("[data-animate='best-seller']");
      const loop = horizontalLoop(items, {
        repeat: -1,
        draggable: true,
        center: true,
        onChange: (element: HTMLElement, index: number) => {
          // when the active element changes, this function gets called.
          setActiveItem({
            element,
            index,
          });
        },
      });

      gsap.fromTo(
        "[data-animate='motif']",
        {
          rotation: 0,
        },
        {
          rotation: 360,
          repeat: -1,
          ease: "none",
          duration: 7,
        }
      );
      gsap.set("[data-animate='motif']", {
        filter: "blur(30px)",
        opacity: 0.3,
      });
      gsap.to("[data-animate='motif']", {
        scrollTrigger: {
          trigger: "[data-animate='motif']",
          start: "top center",
          end: "top top",
          scrub: true,
        },
        filter: "blur(13px)",
        opacity: 0.5,
      });

      gsap.fromTo(
        "[data-animate='best-seller-image']",
        {
          rotation: "-5",
          transformOrigin: "0 100%",
        },
        {
          rotation: "5",
          transformOrigin: "0 100%",
          duration: 0.4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0,0 0.391,-0.043 0.626,0.168 0.806,0.33 1,1 1,1 "
          ),
          repeat: -1,
          yoyo: true,
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <Block
        container
        className="flex flex-col justify-center my-24 md:justify-start md:my-0 md:flex-row"
      >
        <Image
          data-animate="motif"
          className="absolute w-[500px] xs:w-[600px] xs:-top-1/3 right-0 top-0 translate-x-1/2 aspect-square max-w-none"
          alt="best-seller-motif"
          src={Motif}
        ></Image>
        <Block
          padding="l"
          className="flex flex-col justify-center max-w-[300px] w-4/5 md:max-w-[unset] md:min-w-[380px] lg:min-w-[450px] md:pr-[90px] lg:pr-[150px] z-[2] md:bg-base"
        >
          <h2>
            <span className="relative after:content-[''] after:bg-titleShine after:bg-contain after:bg-no-repeat after:absolute after:-top-2 after:-right-2 after:w-16 after:aspect-square after:translate-x-full after:-translate-y-1/2 after:object-contain">
              Best
            </span>
            <br />
            Sellers
          </h2>
          <hr className="w-16 my-5" />
          <p>Check our top-rated and most popular oyster mushroom products.</p>
          <Button
            className="mt-10"
            size="medium"
            color="tertiary"
            backgroundColor="primary"
          >
            Shop More
          </Button>
        </Block>

        <Block className="flex items-center flex-shrink h-[40vw] min-h-[320px] md:h-[500px] overflow-visible z-[2] md:z-[1] md:py-24 md:border-l-2 md:border-primary">
          {<Items active={activeItem?.index || NaN} />}
          {/* <div className="h-full">
          </div> */}
        </Block>
      </Block>
    </div>
  );
};
