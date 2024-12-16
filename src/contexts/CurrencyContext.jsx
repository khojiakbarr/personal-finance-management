import React, { createContext, useState, useEffect } from "react";
import { fetchExchangeRates } from "../utils/api";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const getRates = async () => {
      const fetchedRates = await fetchExchangeRates(baseCurrency);
      setRates(fetchedRates);
    };
    getRates();
  }, [baseCurrency]);

  return (
    <CurrencyContext.Provider value={{ rates, baseCurrency, setBaseCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
