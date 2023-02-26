export const useStyles = () => {
  const mapDefaults = (defaultStyles: DefaultStyle[]) => {
    return defaultStyles
      .map((style) => {
        return style.value();
      })
      .join(" ");
  };

  return {
    mapDefaults,
  };
};
