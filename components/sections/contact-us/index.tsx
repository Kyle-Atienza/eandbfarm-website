import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";
import { HiPhone } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io5";

type ContactOption = {
  icon: React.ReactNode;
  transform: {
    x: number;
    y: number;
    rotation: number;
  };
};

export const ContactUs = () => {
  const comp = React.useRef<HTMLDivElement>(null);

  const contactOptions: ContactOption[] = [
    {
      icon: <HiPhone />,
      transform: {
        x: 100,
        y: 50,
        rotation: 8,
      },
    },
    {
      icon: <IoLogoFacebook />,
      transform: {
        x: -60,
        y: -50,
        rotation: -15,
      },
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set("[data-animate='circle-clip']", {
        scale: 0,
      });

      gsap.to("[data-animate='circle-clip']", {
        scrollTrigger: {
          trigger: "[data-animate='circle-clip']",
          start: "bottom bottom",
          end: "top center",
          scrub: 1.5,
        },
        scale: 1,
      });

      const contactOptionsAnim = gsap.utils.toArray<HTMLElement>(
        "[data-animate='contact-option']"
      );
      contactOptionsAnim.forEach((option, index) => {
        const transformPoints = contactOptions[index].transform;

        gsap.set(option, {
          x: transformPoints.x,
          y: transformPoints.y,
          rotation: transformPoints.rotation,
        });
        gsap.to(option, {
          scrollTrigger: {
            trigger: "[data-animate='circle-clip']",
            start: "top bottom",
            end: "top center",
            scrub: 5.5,
          },
          x: transformPoints.x * 1.2,
          y: transformPoints.y * 1.2,
          rotation: transformPoints.rotation * 2,
        });
      });
    }, comp);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={comp} className="md:h-[380px] h-screen relative text-base">
      <div
        data-animate="circle-clip"
        className="bg-primary min-h-[800px] h-[60vw] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></div>
      {contactOptions.map((option, index) => {
        return (
          <div
            key={index}
            data-animate="contact-option"
            className="group absolute text-4xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[2] origin-center cursor-pointer"
          >
            <span className="transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:rotate-6 group-hover:text-primary z-[2] relative">
              {option.icon}
            </span>
            <div className=" transition-transform duration-300 ease-in-out absolute origin-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-secondary w-[80px] aspect-square rounded-full group-hover:scale-100 scale-0"></div>
          </div>
        );
      })}

      <div className="flex items-center justify-center w-full h-full z-[1] relative">
        <h2 className="text-left">Got More Questions?</h2>
      </div>
    </div>
  );
};
