import React, { useState, useContext } from "react";
import {
  Box,
  Card,
  TextField,
  MenuItem,
  Select,
  Button,
  Typography,
} from "@mui/material";
import { CurrencyContext } from "../contexts/CurrencyContext";

const CurrencyConverter = () => {
  const { rates } = useContext(CurrencyContext);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const handleConvert = (e) => {
    e.preventDefault();
    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    setResult(
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
    );
  };

  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 400, padding: 2 }}>
        <Typography variant="h6" gutterBottom align="center">
          Valyuta konvertori
        </Typography>
        <form onSubmit={handleConvert}>
          {/* Amount Input */}
          <TextField
            label="Miqdor"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* From Currency Select */}
          <Select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
            displayEmpty
            required
          >
            {Object.keys(rates).map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>

          {/* To Currency Select */}
          <Select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
            displayEmpty
            required
          >
            {Object.keys(rates).map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>

          {/* Convert Button */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Konvertatsiya
            </Button>
          </Box>
        </form>

        {/* Result */}
        {result && (
          <Typography variant="h6" align="center" sx={{ mt: 3 }}>
            {result}
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default CurrencyConverter;
