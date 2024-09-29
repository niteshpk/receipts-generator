import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RentReceiptContainer from "./components/rent-receipt/RentReceiptContainer";
import WifiReceiptContainer from "./components/wifi-receipt/WifiReceiptContainer";
import LaptopSubmissionContainer from "./components/laptop-submission-receipt/LaptopSubmissionContainer";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rent-receipt",
    element: <RentReceiptContainer />,
  },
  {
    path: "/wifi-receipt",
    element: <WifiReceiptContainer />,
  },
  {
    path: "/laptop-submission-receipt",
    element: <LaptopSubmissionContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}></RouterProvider>
    <Footer />
  </React.StrictMode>
);
