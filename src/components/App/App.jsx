import { useContext } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionHistoryPage from "../_pages/TransactionHistoryPage";
import { BaseContext } from "../BaseProvider/BaseProvider";

const App = () => {
  const { activePage } = useContext(BaseContext);

  switch (activePage) {
    case "costs":
      return <TransactionPage />;
    case "incomes":
      return <TransactionPage />;
    case "balance":
      return <BalancePage />;
    case "costsHistory":
      return <TransactionHistoryPage />;
    case "incomesHistory":
      return <TransactionHistoryPage />;
    default:
      return <MainPage />;
  }
};

export default App;
