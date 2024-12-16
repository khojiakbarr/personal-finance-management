import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import { TransactionProvider } from "./contexts/TransactionsContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import CurrencyConverter from "./components/CurrencyConvert";
import TransactionForm from "./components/TransactionsForm";
import TransactionList from "./components/TransActionsList/TransactionList";

function App() {
  return (
    <TransactionProvider>
      <CurrencyProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route
                index
                element={
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Dashboard />
                  </motion.div>
                }
              />
              <Route
                path="transactions"
                element={
                  <motion.div
                    key="transactions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TransactionList />
                  </motion.div>
                }
              />
              <Route
                path="converter"
                element={
                  <motion.div
                    key="converter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CurrencyConverter />
                  </motion.div>
                }
              />
              <Route
                path="addtransactions"
                element={
                  <motion.div
                    key="addtransactions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TransactionForm />
                  </motion.div>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </CurrencyProvider>
    </TransactionProvider>
  );
}

export default App;
