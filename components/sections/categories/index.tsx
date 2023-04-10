import { Block, Button } from "@/components";
import { horizontalLoop } from "@/helpers";
import gsap, { Circ, Power1 } from "gsap";
import Draggable from "gsap/dist/Draggable";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CategoriesProps = {
  button?: boolean;
};

export const Categories = ({ button }: CategoriesProps) => {
  const comp = React.useRef<HTMLDivElement>(null);
  const categoriesContainer = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string>("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(Draggable);

      const items = gsap.utils.toArray("[data-animate='category-card']");
      const loop = horizontalLoop(items, {
        repeat: -1,
        speed: 1,
        draggable: true,
        reversed: true,
      });

      gsap.set("[data-animate='category-name']", {
        y: "80%",
        rotateX: -80,
      });

      const toggleTitle = gsap
        .timeline({ reversed: true })
        .to(
          "[data-animate='categories-title']",
          {
            y: "-80%",
            rotateX: 80,
            duration: 0.3,
            ease: Circ.easeOut,
            yoyoEase: true,
          },
          0
        )
        .to(
          "[data-animate='category-name']",
          {
            y: "0",
            rotateX: 0,
            duration: 0.3,
            ease: Circ.easeOut,
            yoyoEase: true,
          },
          0
        );

      categoriesContainer.current?.addEventListener("mouseenter", () => {
        toggleTitle.play();
      });
      categoriesContainer.current?.addEventListener("mouseleave", () => {
        toggleTitle.reverse();
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col md:gap-6" ref={comp}>
      <Block padding="x">
        <Block
          className="relative flex flex-col gap-10"
          data-animate="title-wrapper"
        >
          <div className="relative py-3 overflow-hidden perspective">
            <h2 className="text-center opacity-0">Categories</h2>
            <h2
              className="absolute w-full text-center -translate-y-1/2 top-1/2"
              data-animate="categories-title"
            >
              Categories
            </h2>
            <div
              className="absolute top-1/2 px-7 py-3 w-full h-[60px] text-center -translate-x-1/2 flex items-center justify-center md:w-fit  md:min-w-[300px]  -translate-y-1/2 left-1/2 bg-secondary text-primary rounded-[100px]"
              data-animate="category-name"
            >
              <h2 className="translate-y-[7%]">{hovered}</h2>
            </div>
          </div>
          {button ? (
            <Button
              color="tertiary"
              backgroundColor="primary"
              className="right-0 mx-auto -translate-y-1/2 md:absolute top-1/2 w-fit"
            >
              Check our shop
            </Button>
          ) : null}
        </Block>
      </Block>
      <div ref={categoriesContainer} className="flex mt-4 overflow-hidden">
        {[
          "Snacks",
          "Fresh Produce",
          "Sides",
          "Condiments",
          "Packs",
          "Fruiting Bags",
        ].map((category, index) => {
          return (
            <CategoryCard
              key={index}
              onHover={() => setHovered(category.toString())}
            />
          );
        })}
      </div>
    </div>
  );
};

export const CategoryCard = ({ onHover }: { onHover?: () => void }) => {
  return (
    <div data-animate="category-card" onMouseOver={onHover}>
      <div className="min-w-[250px] w-[25vw] max-w-[450px] aspect-[4/3] bg-secondary rounded-2xl relative overflow-hidden flex-shrink-0 mr-6 group ">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full transition-all duration-300 ease-in-out pointer-events-none group-hover:mix-blend-screen group-hover:grayscale"
          src="https://images.unsplash.com/photo-1612773843298-44dcdd45d865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="category-image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
