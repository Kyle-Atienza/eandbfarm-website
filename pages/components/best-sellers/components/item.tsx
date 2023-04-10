import { SampleImages } from "@/images";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type ItemProps = {
  active: boolean;
  item: number;
};

export const Item = ({ active, item }: ItemProps) => {
  const comp = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-animate='best-seller-label']", {
        clipPath: "circle(0)",
      });

      const label = gsap
        .timeline({ reversed: true })
        .from("[data-animate='best-seller-label']", {
          clipPath: "circle(0%)",
          duration: 1,
          ease: Power4.easeInOut,
        })
        .to("[data-animate='best-seller-label']", {
          clipPath: "circle(100%)",
          duration: 1,
          ease: Power4.easeInOut,
        });

      if (active) {
        label.play();
      } else {
        label.reverse(0);
      }
    }, comp);

    return () => {
      ctx.revert();
    };
  }, [active]);

  return (
    <div
      ref={comp}
      className="relative aspect-square"
      data-animate="best-seller"
    >
      <div
        data-animate="best-seller-label"
        className="absolute w-[45%] transition-all duration-75 ease-in-out -translate-x-1/2 aspect-square top-1/2 left-1/2 bg-secondary z-[2] rounded-full grid place-items-center"
      >
        <div>
          <h3 className="text-center text-lg font-ranille leading-[1em]">
            Oyster Mushroom Chicharon
          </h3>
        </div>
      </div>
      <Image
        data-animate="best-seller-image"
        className={`object-cover h-full item ${active ? "" : ""}`}
        src={SampleImages.bestseller}
        alt="best seller"
      />
    </div>
  );
};
