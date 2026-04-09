import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import Transactionprovider from "./Contexts/Transactionprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Transactionprovider>
          <App />
        </Transactionprovider> 
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
