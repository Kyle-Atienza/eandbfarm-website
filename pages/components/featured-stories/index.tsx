import { Block, Button } from "@/components";
import { Card } from "./components";
import Image from "next/image";

export const FeaturedStories = () => {
  return (
    <Block className="grid-cols-2 grid-rows-[repeat(3,auto)] md:grid">
      <Block className="col-start-2" padding border>
        <h2 className="text-center">Featured Stories</h2>
      </Block>
      <Block className="col-start-2 row-start-2 row-end-4" border>
        <Card main position={1} />
      </Block>
      <div className="flex flex-col row-start-1 row-end-4">
        <Block className="flex-1" border>
          <Card position={2} />
        </Block>
        <Block className="flex-1" border>
          <Card position={3} />
        </Block>
      </div>
    </Block>
  );
};
