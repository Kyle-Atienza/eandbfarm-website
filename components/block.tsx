import { useStyles } from "@/hooks";

type BlockProps = {
  children: React.ReactNode;
  padding?: string;
  border?: string | "none";
  background?: string;
  rounded?: boolean;
  className?: string;
};

export const Block = ({
  children,
  padding,
  border,
  background,
  rounded,
  className = "",
}: BlockProps) => {
  const { mapDefaults } = useStyles();

  const defaultWrapperStyles: DefaultStyle[] = [
    {
      name: "padding",
      value() {
        return !border ? "p-12" : "";
      },
    },
    {
      name: "background",
      value() {
        return background ? `bg-${background}` : "";
      },
    },
    {
      name: "border-radius",
      value() {
        return rounded ? "rounded-2xl" : "";
      },
    },
  ];
  const defaultInnerStyles: DefaultStyle[] = [
    {
      name: "padding",
      value() {
        return padding ? padding : "p-12";
      },
    },
    {
      name: "border",
      value() {
        if (border === "none" || background) {
          return "";
        } else {
          const hasBorderStyle = "border-2";

          if (border) {
            return `${hasBorderStyle} ${border}`;
          } else {
            return `${hasBorderStyle} border-primary`;
          }
        }
      },
    },
  ];

  return (
    <div
      className={`block-wrapper ${mapDefaults(
        defaultWrapperStyles
      )}  ${className}`}
    >
      <div className={`block-inner ${mapDefaults(defaultInnerStyles)} `}>
        {children}
      </div>
    </div>
  );
};
