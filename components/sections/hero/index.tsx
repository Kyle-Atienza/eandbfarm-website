import { Block, Button } from "@/components";
import {
  BrandmarkFull,
  WalkingInMushroomHouse,
  WalkingInMushroomHouseMobile,
} from "@/images";
import Image from "next/image";

type HeroProps = {
  image: {
    desktop: string;
    mobile: string;
  };
  headline: string;
  description?: string;
  button?: React.ReactNode;
};

type HeroContentProps = {
  headline: string;
  description?: string;
  button?: React.ReactNode;
};

export const Hero = ({ image, headline, description, button }: HeroProps) => {
  return (
    <Block
      padding
      margin="x"
      border
      className="h-screen max-h-[720px] md:h-[672px] md:max-h-[unset] z-[2]"
    >
      <Block padding className="w-full h-full bg-primary rounded-2xl" />
      <Block.Front className="h-full " backgroundImage={image.mobile}>
        <Block className="h-full">
          <Content
            headline={headline}
            description={description}
            button={button}
          />
        </Block>
      </Block.Front>
      <Block.Front className="hidden md:block " backgroundImage={image.desktop}>
        <Block className="h-full">
          <Content
            headline={headline}
            description={description}
            button={button}
          />
        </Block>
      </Block.Front>
    </Block>
  );
};

const Content = ({ headline, description, button }: HeroContentProps) => {
  return (
    <Block padding className="flex items-center justify-end h-full">
      <Block
        padding
        className="flex flex-col items-center h-full sm:items-end sm:h-3/4 md:h-full max-w-[800px]"
      >
        <Block padding="t x">
          <h1 className="text-center sm:text-right font-ranille text-tertiary">
            &quot;{headline}&quot;
          </h1>
          <p className="mt-4 text-center sm:text-right text-tertiary">
            {description}
          </p>
        </Block>
        <>{button}</>
      </Block>
    </Block>
  );
};
