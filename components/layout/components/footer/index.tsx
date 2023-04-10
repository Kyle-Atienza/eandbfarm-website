import React from "react";
import { Block, Input } from "@/components";
import { FooterLinkGroup } from "@/components/layout/components/footer/components";

export const Footer = () => {
  const footerContent = [
    {
      name: "Services",
      list: [
        "Tour the Farm",
        "Production Seminar",
        "Processing Serminar",
        "Events",
        "Catering",
      ],
    },
    {
      name: "Support and Questions",
      list: [
        "Wholesale & Resell",
        "Shipping & Delivery",
        "Returns & Exchange",
        "Contact Us",
      ],
    },
  ];

  return (
    <Block backgroundColor padding="b" margin="x">
      <Block padding border>
        <Block
          padding
          className="flex flex-col md:flex-row text-tertiary bg-primary rounded-2xl"
        >
          <div className="flex flex-col flex-[1]">
            <h1>Signup to our newsletter</h1>
            <Input className="mt-7" submit />
            <p className="mt-3">
              Latest Updates from our events, products or even recipes
            </p>
          </div>
          <div className="flex-[2] mt-10 md:mt-0">
            <div className="grid grid-rows-[repeat(3,_auto)] grid-flow-col auto-cols-[minmax(0,_200px)] justify-end space-y-10 md:space-y-0 gap-x-10 md:gap-y-6 text-end">
              {footerContent.map((content, index) => {
                return <FooterLinkGroup content={content} key={index} />;
              })}
            </div>
          </div>
        </Block>
      </Block>
    </Block>
  );
};
