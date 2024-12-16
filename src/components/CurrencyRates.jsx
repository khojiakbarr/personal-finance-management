import React, { useContext } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { CurrencyContext } from "../contexts/CurrencyContext";

const CurrencyRates = () => {
  const { rates, baseCurrency } = useContext(CurrencyContext);

  const displayCurrencies = ["USD", "EUR", "UZS", "RUB", "GBP"];

  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Current exchange rates
        </Typography>
        <Grid container spacing={1}>
          {displayCurrencies.map((currency) => (
            <Grid item xs={12} sm={12} md={12} key={currency}>
              <Card sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="body2">
                  1 {baseCurrency} = {rates[currency]?.toFixed(4) || "N/A"}{" "}
                  {currency}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CurrencyRates;
