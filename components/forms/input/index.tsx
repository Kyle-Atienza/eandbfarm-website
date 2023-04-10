import gsap, { Linear } from "gsap";
import React, { useEffect, useRef, useState } from "react";

import { IoArrowForwardOutline } from "react-icons/io5";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  submit?: boolean;
  onClick?: () => void;
}

export const Input = ({
  className,
  submit,
  onClick,
  ...restProps
}: InputProps) => {
  const comp = React.useRef<HTMLDivElement>(null);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-animate='arrows-to-right']",
        { x: "-100%", rotation: 0.01 },
        {
          x: "100%",
          duration: animationSpeed,
          rotation: 0.01,
          ease: Linear.easeNone,
          repeat: -1,
        }
      );
    }, comp);

    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationSpeed]);

  return (
    <div
      ref={comp}
      className={`group/wrapper flex gap-2 items-center bg-secondary pl-5 px-3 py-3 rounded-full ring-0 focus-within:ring-2 focus-within:ring-secondary focus-within:bg-primary focus-within:text-secondary ease-in-out transition-all duration-200 text-primary ${className}`}
    >
      <input className="w-full outline-none " type="text" {...restProps} />
      {submit ? (
        <button
          className="relative w-6 transition-all duration-200 ease-in-out rounded-full group/button bg-primary aspect-square group-focus-within/wrapper:border-2 group-focus-within/wrapper:border-solid group-focus-within/wrapper:border-secondary hover:bg-secondary hover:border-2 hover:border-solid hover:border-primary "
          onMouseEnter={() => setAnimationSpeed(0.5)}
          onMouseLeave={() => setAnimationSpeed(1)}
          onClick={onClick}
        >
          <div className="absolute top-0 left-0 flex justify-center w-full h-full overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <IoArrowForwardOutline
                key={item}
                className="relative flex-shrink-0 w-full h-full text-1xl text-secondary group-hover/button:text-primary"
                data-animate="arrows-to-right"
              />
            ))}
          </div>
        </button>
      ) : null}
    </div>
  );
};
