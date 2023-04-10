import { BlockProps } from "../types";

export const useBlock = ({
  padding,
  border,
  margin,
  backgroundColor,
  container,
}: BlockProps) => {
  const marginVariants: DefaultStyleVariant[] = [
    {
      name: "x",
      value: "mx-6 lg:mx-8 xl:mx-12",
    },
    {
      name: "y",
      value: "my-6 lg:my-8 xl:my-12",
    },
    {
      name: "t",
      value: "mt-6 lg:mt-8 xl:mt-12",
    },
    {
      name: "b",
      value: "mb-6 lg:mb-8 xl:mb-12",
    },
    {
      name: "l",
      value: "ml-6 lg:ml-8 xl:ml-12",
    },
    {
      name: "r",
      value: "mr-6 lg:mr-8 xl:mr-12",
    },
  ];
  const paddingVariants: DefaultStyleVariant[] = [
    {
      name: "x",
      value: "px-6 lg:px-8 xl:px-12",
    },
    {
      name: "y",
      value: "py-6 lg:py-8 xl:py-12",
    },
    {
      name: "t",
      value: "pt-6 lg:pt-8 xl:pt-12",
    },
    {
      name: "b",
      value: "pb-6 lg:pb-8 xl:pb-12",
    },
    {
      name: "l",
      value: "pl-6 lg:pl-8 xl:pl-12",
    },
    {
      name: "r",
      value: "pr-6 lg:pr-8 xl:pr-12",
    },
  ];
  const borderVariants: DefaultStyleVariant[] = [
    {
      name: "x",
      value: "border-x-2",
    },
    {
      name: "y",
      value: "border-y-2",
    },
    {
      name: "t",
      value: "border-t-2",
    },
    {
      name: "b",
      value: "border-b-2",
    },
    {
      name: "l",
      value: "border-l-2",
    },
    {
      name: "r",
      value: "border-r-2",
    },
  ];

  const defaultBlockStyles: DefaultStyle[] = [
    {
      name: "background-color",
      value() {
        if (typeof backgroundColor === "boolean") {
          return "bg-base";
        }
        if (typeof backgroundColor === "string") {
          return `bg-${backgroundColor}`;
        }
        return "";
      },
    },
    {
      name: "padding",
      value() {
        if (typeof padding === "boolean") {
          return "p-6 lg:p-8 xl:p-12";
        }
        if (typeof padding === "string") {
          const paddings = padding
            .split(" ")
            .map((direction) => {
              return paddingVariants.find(
                (variant) => variant.name === direction
              )?.value;
            })
            .join(" ");

          return `${paddings}`;
        }
        return "";
      },
    },
    {
      name: "border",
      value() {
        if (typeof border === "boolean") {
          return "border border-2 border-primary";
        }
        if (typeof border === "string") {
          const borders = border
            .split(" ")
            .map((direction) => {
              return borderVariants.find(
                (variant) => variant.name === direction
              )?.value;
            })
            .join(" ");

          return `${borders} border-primary`;
        }
        return "";
      },
    },
    {
      name: "margin",
      value() {
        if (margin) {
          const margins = margin
            .split(" ")
            .map((direction) => {
              return marginVariants.find(
                (variant) => variant.name === direction
              )?.value;
            })
            .join(" ");

          return `${margins}`;
        }
        return "";
      },
    },
    {
      name: "container",
      value() {
        if (container) {
          return "xl:container xl:mx-auto";
        }
        return "";
      },
    },
  ];

  return {
    defaultBlockStyles,
  };
};
