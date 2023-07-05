import { Html, Head, Main, NextScript } from "next/document";
import {ColorModeScript, extendTheme} from "@chakra-ui/react";

export const theme = extendTheme();

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
