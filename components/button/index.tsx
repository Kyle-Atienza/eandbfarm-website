import { useStyles } from "@/hooks";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "medium" | "small";
  color?: string;
  clean?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  size,
  backgroundColor,
  color,
  className,
  clean,
  onClick,
  ...restProps
}: ButtonProps) => {
  const { mapDefaults } = useStyles();

  const defaultInnerStyles: DefaultStyle[] = [
    {
      name: "fontSize",
      value() {
        if (size === "medium") {
          return "text-xl";
        }
        if (size === "small") {
          return "text-md";
        }
        return "text-md";
      },
    },
    {
      name: "padding",
      value() {
        if (clean) {
          return "";
        } else {
          if (size === "medium") {
            return "px-6 py-3";
          }
          if (size === "small") {
            return "px-3 py-2";
          }
          return "px-5 py-3";
        }
      },
    },
    {
      name: "color",
      value() {
        if (color) {
          return `text-${color}`;
        }
        return "text-primary";
      },
    },
    {
      name: "background color",
      value() {
        if (clean) {
          return "";
        } else {
          if (backgroundColor) {
            return `bg-${backgroundColor}`;
          }
          return "bg-tertiary";
        }
      },
    },
  ];

  return (
    <button
      className={`rounded-xl ${mapDefaults(defaultInnerStyles)} ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
