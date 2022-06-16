import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./Utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider theme={theme}>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
