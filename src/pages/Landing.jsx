import Header from "../components/Header";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";
import TradingViewWidget from "../components/TradingViewWidget";
import Reviews from "../components/Reviews";
import Chatbot from "../components/Chatbot";
import Stripe from "../components/Stripe";

function Landing() {
    return (
        // this <> acts as a parent div
        <>
      <Header />
      <Ticker />
      <TradingViewWidget />
      <Chatbot />
      <Reviews />
      <Stripe />
      <Footer />
        </>
    );
  }

  export default Landing;