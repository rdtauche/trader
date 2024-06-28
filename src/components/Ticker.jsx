import "../styles/Ticker.css";
import React, { useEffect } from 'react';

function Ticker() {
  const tickerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '10px',
    zIndex: 1000,
    backgroundColor: '#fff',
  };

  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement('script');
    const root = document.getElementById('root');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index"},
        {"proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD"},
        {"proName": "FX_IDC:EURUSD", "title": "EUR to USD"},
        {"proName": "BITSTAMP:BTCUSD", "title": "Bitcoin"},
        {"proName": "BITSTAMP:ETHUSD", "title": "Ethereum"},
        {"description": "GBPUSD", "proName": "FX:GBPUSD"},
        {"description": "AUDUSD", "proName": "OANDA:AUDUSD"},
        {"description": "USDJPY", "proName": "OANDA:USDJPY"},
        {"description": "USDCAD", "proName": "FX:USDCAD"}
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    });

    root.prepend(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this effect runs only once

  return (
    <div style={tickerStyle} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div>
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
        </a>
      </div>
    </div>
  );
}

export default Ticker; 

