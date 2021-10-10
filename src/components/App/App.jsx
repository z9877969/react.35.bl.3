import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

class App extends Component {
  state = {
    activePage: "",
    costs: [],
    incomes: [],
  };

  toggleActivePage = (activePage = "") => {
    this.setState({ activePage });
  };

  addTransaction = ({ transaction, transType }) => {
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
  };

  render() {
    const { activePage, incomes, costs } = this.state;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            closeActivePage={this.toggleActivePage}
            transType={activePage}
            addTransaction={this.addTransaction}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            closeActivePage={this.toggleActivePage}
            transType={activePage}
            addTransaction={this.addTransaction}
          />
        );
      case "balance":
        return (
          <BalancePage
            transactions={[...costs, ...incomes]}
            closeActivePage={this.toggleActivePage}
          />
        );
      default:
        return <MainPage openActivePage={this.toggleActivePage} />;
    }
  }
}

export default App;
