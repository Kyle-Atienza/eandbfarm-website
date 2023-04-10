import { Button, Hero, Categories, Block } from "@/components";
import {
  ProductsLineUp,
  ProductsLineUpMobile,
  OysterMushroomChicharon,
} from "@/images";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

export default function Shop() {
  const comp = useRef<HTMLDivElement>(null);
  const productImage = useRef<HTMLImageElement>(null);

  const [hovered, setHovered] = useState<boolean>(false);
  const [showSizes, setShowSizes] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-animate='image-with-background']", {
        y: "100%",
      });

      const showBackground = gsap
        .timeline({
          defaults: {
            ease: "none",
            duration: 0.2,
          },
          paused: true,
        })
        .to("[data-animate='image-with-background']", {
          y: "0%",
        });

      productImage.current?.addEventListener("mouseenter", () => {
        gsap.to(showBackground, {
          time: showBackground.duration(),
          ease: "bounce.out",
        });
      });
      productImage.current?.addEventListener("mouseleave", () => {
        gsap.to(showBackground, {
          time: 0,
          ease: "expo.out",
          overwrite: true,
        });
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main>
        <section className="hero">
          <Hero
            headline="Local, Fresh & Organic"
            description="Our oyster mushroom farm prides itself on providing locally grown, fresh and certified organic produce."
            button={<Button className="mt-auto w-fit">Shop More</Button>}
            image={{
              desktop: ProductsLineUp,
              mobile: ProductsLineUpMobile,
            }}
          />
        </section>
        <section className="mt-32 products">
          <Block padding className="grid grid-cols-2">
            <div ref={comp} className="product-card group">
              <div
                ref={productImage}
                className="relative overflow-hidden product-image rounded-2xl bg-primary aspect-square"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Image
                  alt="product-card-image"
                  className="absolute top-0 left-0 w-full h-full z-[1]"
                  src={OysterMushroomChicharon.card.transparent}
                />
                <Image
                  data-animate="image-with-background"
                  alt="product-card-image"
                  className="absolute top-0 left-0 w-full h-full"
                  src={OysterMushroomChicharon.card.default}
                />
              </div>
              <div className="mt-4">
                <h3 className="leading-none font-ranille">
                  Oyster Mushroom Chicharon
                </h3>
                <div className="flex gap-2 mt-2">
                  <div className="px-3 py-2 bg-secondary rounded-3xl">
                    <h4>₱130.00</h4>
                  </div>
                  <div
                    className="relative flex items-center px-3 py-2 bg-primary text-tertiary rounded-3xl"
                    onClick={() => setShowSizes(!showSizes)}
                  >
                    <h4>130g</h4>
                    <IoCaretDownOutline />
                    <div
                      className={`absolute right-0 p-3 mt-3 top-full bg-primary min-w-[100px] rounded-2xl shadow-xl`}
                    >
                      hello
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </section>
      </main>
    </>
  );
}
