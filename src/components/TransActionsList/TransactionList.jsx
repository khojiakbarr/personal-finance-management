import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const { baseCurrency } = useContext(CurrencyContext);
  const [filter, setFilter] = useState({
    category: "",
    startDate: "",
    endDate: "",
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (!filter.category || transaction.category === filter.category) &&
      (!filter.startDate ||
        new Date(transaction.date) >= new Date(filter.startDate)) &&
      (!filter.endDate ||
        new Date(transaction.date) <= new Date(filter.endDate))
    );
  });

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom align="center">
        Tranzaksiyalar ro'yxati
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
        {/* Category Filter */}
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            label="Katagoriya"
          >
            <MenuItem value="">
              <em>Barcha kategoriyalar</em>
            </MenuItem>
            <MenuItem value="food">Oziq-ovqat</MenuItem>
            <MenuItem value="transport">Transport</MenuItem>
            <MenuItem value="entertainment">Ko'ngilochar</MenuItem>
            <MenuItem value="utilities">Kommunal xizmatlar</MenuItem>
            <MenuItem value="other">Boshqa</MenuItem>
          </Select>
        </FormControl>

        {/* Start Date Filter */}
        <TextField
          label="Boshlanish sanasi"
          type="date"
          name="startDate"
          value={filter.startDate}
          onChange={handleFilterChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />

        {/* End Date Filter */}
        <TextField
          label="Tugatish sanasi"
          type="date"
          name="endDate"
          value={filter.endDate}
          onChange={handleFilterChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Box>

      {/* Transaction Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Sana</TableCell>
              <TableCell align="left">Kategoriyasi</TableCell>
              <TableCell align="left">Tur</TableCell>
              <TableCell align="left">Miqdor</TableCell>
              <TableCell align="left">Bazaviy valyutada</TableCell>
              <TableCell align="left">Izoh</TableCell>
              <TableCell align="center">Amallar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TransitionGroup component={null}>
              {filteredTransactions.map((transaction) => (
                <CSSTransition
                  key={transaction.id}
                  timeout={500}
                  classNames="item"
                >
                  <TableRow hover>
                    <TableCell align="left">{transaction.date}</TableCell>
                    <TableCell align="left">{transaction.category}</TableCell>
                    <TableCell align="left">{transaction.type}</TableCell>
                    <TableCell align="left">
                      {transaction.amount} {transaction.currency}
                    </TableCell>
                    <TableCell align="left">
                      {transaction.amountInBaseCurrency.toFixed(2)}{" "}
                      {baseCurrency}
                    </TableCell>
                    <TableCell align="left">{transaction.note}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteTransaction(transaction.id)}
                      >
                        O'chirish
                      </Button>
                    </TableCell>
                  </TableRow>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionList;
