import React, { useState, useContext } from "react";
import {
  Box,
  Card,
  TextField,
  MenuItem,
  Select,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { TransactionContext } from "../contexts/TransactionsContext";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { Navigate } from "react-router-dom";

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const { rates, baseCurrency } = useContext(CurrencyContext);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");
  const [currency, setCurrency] = useState(baseCurrency);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      type,
      currency,
      date,
      note,
      amountInBaseCurrency: (amount / rates[currency]) * rates[baseCurrency],
    };
    console.log(newTransaction);

    addTransaction(newTransaction);
    setAmount("");
    setCategory("");
    setType("expense");
    setCurrency(baseCurrency);
    setDate("");
    setNote("");
    Navigate("/dashboard");
  };

  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 400, padding: 2 }}>
        <Typography variant="h6" gutterBottom align="center">
          Yangi tranzaksiya qo'shish
        </Typography>
        <form onSubmit={handleSubmit}>
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

          {/* Category Select */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Kategoriyani tanlang</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Kategoriyani tanlang"
            >
              <MenuItem value="food">Oziq-ovqat</MenuItem>
              <MenuItem value="transport">Transport</MenuItem>
              <MenuItem value="entertainment">Ko'ngilochar</MenuItem>
              <MenuItem value="utilities">Kommunal xizmatlar</MenuItem>
              <MenuItem value="other">Boshqa</MenuItem>
            </Select>
          </FormControl>

          {/* Type of Transaction (Radio) */}
          <RadioGroup
            row
            value={type}
            onChange={(e) => setType(e.target.value)}
            sx={{ mt: 2 }}
          >
            <FormControlLabel
              value="expense"
              control={<Radio />}
              label="Xarajat"
            />
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Daromad"
            />
          </RadioGroup>

          {/* Currency Select */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Valyuta tanlang</InputLabel>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              label="Valyuta tanlang"
            >
              {Object.keys(rates).map((curr) => (
                <MenuItem key={curr} value={curr}>
                  {curr}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Date Input */}
          <TextField
            label="Sana"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* Note Input */}
          <TextField
            label="Izoh"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Izohni kiriting"
          />

          {/* Submit Button */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Qo'shish
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default TransactionForm;
