import { useStyles } from "@/hooks";
import Image from "next/image";
import React from "react";
import { useBlock } from "./hooks";

import type { BlockProps, FrontProps } from "./types";

const Block = ({
  children,
  padding,
  border,
  margin,
  backgroundColor,
  container,
  className = "",
}: BlockProps) => {
  const { mapDefaults } = useStyles();
  const { defaultBlockStyles } = useBlock({
    padding,
    border,
    margin,
    backgroundColor,
    container,
  });

  return (
    <div
      className={`block-inner relative ${mapDefaults(
        defaultBlockStyles
      )} ${className}`}
    >
      {children}
    </div>
  );
};

const Front = ({
  children,
  className,
  backgroundImage,
  ...restProps
}: FrontProps) => {
  return (
    <div
      className={`${className} absolute top-0 left-0 w-full h-full`}
      {...restProps}
    >
      <div className="z-[1] relative h-full">{children}</div>
      {backgroundImage ? (
        <Image
          className={`absolute top-0 left-0 object-cover w-full h-full`}
          alt="block image"
          src={backgroundImage}
        />
      ) : null}
    </div>
  );
};

Block.Front = Front;

export { Block };
