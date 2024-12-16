import React, { useContext } from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import dashboardStyle from "./dashboard.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);
  const { baseCurrency } = useContext(CurrencyContext);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amountInBaseCurrency, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amountInBaseCurrency, 0);

  const netBalance = totalIncome - totalExpense;

  const expensesByCategory = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amountInBaseCurrency;
      return acc;
    }, {});

  const pieChartData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box sx={{ mt: 3 }} className={dashboardStyle.wrapper}>
      <div className={dashboardStyle.balance}>
        <Typography variant="h6" gutterBottom>
          Balance
        </Typography>
        <Typography variant="h5">
          {netBalance.toFixed(2)} {baseCurrency}
        </Typography>
      </div>{" "}
      <div className={dashboardStyle.balance}>
        <Typography variant="h6" gutterBottom>
          Total income
        </Typography>
        <Typography variant="h5">
          {totalIncome.toFixed(2)} {baseCurrency}
        </Typography>
      </div>{" "}
      <div className={dashboardStyle.balance}>
        <Typography variant="h6" gutterBottom>
          Total cost
        </Typography>
        <Typography variant="h5">
          {totalExpense.toFixed(2)} {baseCurrency}
        </Typography>
      </div>
      <div className={dashboardStyle.chart}>
        <Typography variant="h6" gutterBottom>
          Cost analysis
        </Typography>
        <Pie data={pieChartData} />
      </div>
    </Box>
  );
};

export default Dashboard;
