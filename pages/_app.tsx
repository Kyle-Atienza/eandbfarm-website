import "@/styles/globals.css";

import type { AppProps } from "next/app";

// @ts-ignore
import { Breakpoints } from "react-use-breakpoints";

import { Layout } from "@/components";
import { Gopher, Ranille } from "@/pages/fonts";
import { useContext } from "react";

const customBreakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${Gopher.variable} ${Ranille.variable} font-gopher bg-base max-h-screen text-primary w-screen overflow-x-hidden`}
    >
      <Breakpoints breakpoints={customBreakpoints}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Breakpoints>
    </div>
  );
}
