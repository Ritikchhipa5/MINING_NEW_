import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
    <Routes>   
       <Route path="/" element={<App />}/>
       <Route path="/:id" element={<App />}/>
    </Routes>
    </Web3ReactProvider>
  </BrowserRouter>,
  document.getElementById("root")
);