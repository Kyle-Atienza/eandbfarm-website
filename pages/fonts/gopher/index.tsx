import localFont from "@next/font/local";

const gopher = localFont({
  src: [
    { path: "./Gopher-Light.otf", weight: "300", style: "normal" },
    { path: "./Gopher-Regular.otf", weight: "400", style: "normal" },
    { path: "./Gopher-Medium.otf", weight: "500", style: "normal" },
    { path: "./Gopher-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-gopher",
});

export default gopher;
