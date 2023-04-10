import { Block } from "@/components";
import { Card } from "./components";

export const Services = () => {
  return (
    <>
      <Block padding border>
        <h2 className="text-center">Services</h2>
      </Block>
      <div className="flex flex-col md:flex-row">
        {["Mushroom Production Training", "Mushroom Processing Training"].map(
          (service, index) => {
            return <Card key={index} service={service} />;
          }
        )}
      </div>
    </>
  );
};
