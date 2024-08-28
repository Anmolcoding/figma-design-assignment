import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// import Header from "./Components/Header";
// import ConfirmPay from "./Components/ConfirmPay";
// import Details from "./Components/Details";
// import Information from "./Components/Information";
// import Payment from "./Components/Payment";
import BookingSummary from "./Components/BookingSummary";
// import Faq from "./Components/Faq";
// import Footer from "./Components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Header />
    <ConfirmPay />
    <Details />
    <Information />
    <Payment /> */}
    <BookingSummary />
    {/* <Faq />
    <Footer /> */}
  </React.StrictMode>
);
