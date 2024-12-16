import axios from "axios";
// 47e296828307a92738837aad
const API_KEY = "47e296828307a92738837aad";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
    );
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
};
