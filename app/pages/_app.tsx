import { Merriweather, Vollkorn } from "next/font/google";

export const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const vollkorn = Vollkorn({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-merriweather: ${merriweather.style.fontFamily};
            --font-vollkorn: ${vollkorn.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
