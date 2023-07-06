import {ChakraProvider} from "@chakra-ui/react";
import ParseContext from "@/context/parseContext";

import Parse from "parse/dist/parse";

const PARSE_APPLICATION_ID = process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <ParseContext.Provider value={Parse}>
        <Component {...pageProps} />
      </ParseContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;