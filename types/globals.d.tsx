export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type DefaultStyle = {
    name: string;
    value: () => string;
  };

  type DefaultStyleVariant = {
    name: string;
    value: string;
  };

  type Product = {
    name: string;
  };
}
