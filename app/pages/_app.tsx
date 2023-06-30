import { ChakraProvider } from "@chakra-ui/react";
import { Merriweather, Vollkorn } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const merriweather = Merriweather({
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

export const theme = extendTheme({
  colors: {
    bgColor: "#f5f8fa",
    textColor: "#070b0e",
    primaryBtn: "#262d4f",
    secondaryBtn: "#e3ddee",
    accentColor: "#34264f",
  },
  fonts: {
    heading: "var(--font-merriweather)",
    body: "var(--font-vollkorn)",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

// 3. Pass the `theme` prop to the `ChakraProvider`
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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
