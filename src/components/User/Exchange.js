import React, { useState, useEffect } from "react";
import axios from "axios";

const Exchange = () => {
  const [currency, setCurrency] = useState("usd");
  const [crypto, setCrypto] = useState("bitcoin");

  const [totalValue, setTotalValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [cryptoPrices, setCryptoPrices] = useState([]);

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=${currency.toLowerCase()}`
      );

      setCryptoPrices(response.data);
    } catch (error) {
      // console.error("Error fetching crypto prices:", error);
    }
  };
  const calculateTotalValue = () => {
    setTotalValue(amount);
    // setTotalValue(amount * cryptoPrices[crypto.toLowerCase()][currency]);
  };
  useEffect(() => {
    // Fetch live cryptocurrency prices
    calculateTotalValue();
    fetchCryptoPrices();
  }, [currency, amount, crypto, cryptoPrices]);
  return (
    <div>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label onClick={fetchCryptoPrices}>
        Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </label>

      <label>
        Cryptocurrency:
        <select value={crypto} onChange={(e) => setCrypto(e.target.value)}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="tether">Tether</option>
        </select>
      </label>
      <p>
        {/* {console.log(cryptoPrices[crypto.toLowerCase()][currency])} */}
        Current {crypto} price in {currency}:{" "}
        {cryptoPrices &&
        cryptoPrices[crypto.toLowerCase()] !== undefined &&
        !isNaN(amount)
          ? amount * cryptoPrices[crypto.toLowerCase()][currency]
          : "xsaxas"}
        {currency}
        {/* {totalValue} */}
      </p>
    </div>
  );
};

export default Exchange;
