import { ColorModeScript } from "@chakra-ui/color-mode";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
