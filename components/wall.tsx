import { useStyles } from "@/hooks";

type WallProps = {
  direction: "vertical" | "horizontal";
  marginPosition: string;
};

export const Wall = ({ direction, marginPosition }: WallProps) => {
  const { mapDefaults } = useStyles();

  const defaultStyles: DefaultStyle[] = [
    {
      name: "direction",
      value() {
        if (direction === "vertical") {
          return "w-[2px] h-full";
        }
        if (direction === "horizontal") {
          return "h-[2px] w-full";
        }
        return "w-[2px] h-[2px]";
      },
    },
    {
      name: "margin",
      value() {
        return marginPosition ? `${marginPosition}-12` : "";
      },
    },
  ];

  return <div className={`bg-primary ${mapDefaults(defaultStyles)}`} />;
};
