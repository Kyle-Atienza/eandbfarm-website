import { Block, Button } from "@/components";
import {
  BrandmarkFull,
  WalkingInMushroomHouse,
  WalkingInMushroomHouseMobile,
} from "@/images";
import Image from "next/image";

export const Hero = () => {
  return (
    <Block
      padding
      margin="x"
      border
      className="h-screen max-h-[720px] md:h-[672px] md:max-h-[unset]"
    >
      <Block padding className="w-full h-full bg-primary rounded-2xl" />
      <Block.Front
        className="h-full "
        backgroundImage={WalkingInMushroomHouseMobile}
      >
        <Block className="h-full">
          <Content />
        </Block>
      </Block.Front>
      <Block.Front
        className="hidden md:block "
        backgroundImage={WalkingInMushroomHouse}
      >
        <Block className="h-full">
          <Content />
        </Block>
      </Block.Front>
    </Block>
  );
};

const Content = () => {
  return (
    <Block padding className="flex items-center justify-end h-full">
      <Block
        padding
        className="flex flex-col items-center h-full sm:items-end sm:h-3/4 md:h-full max-w-[800px]"
      >
        <Block padding="t x">
          <h1 className="text-center sm:text-right font-ranille text-tertiary">
            &quot;Experience the Benefits of Organic, Fresh, and Local Produce
            Today!&quot;
          </h1>
        </Block>
        <Button className="mt-auto w-fit">Shop More</Button>
        <Image className="mt-5" alt="brandmark full" src={BrandmarkFull} />
      </Block>
    </Block>
  );
};
