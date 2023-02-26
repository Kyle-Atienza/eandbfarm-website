import "@/styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import { Layout } from "@/components";
import { Gopher, Ranille } from "@/pages/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${Gopher.variable} ${Ranille.variable} font-gopher bg-base min-h-screen text-primary`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
