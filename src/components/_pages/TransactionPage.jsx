import { Component } from "react";
import shortid from "shortid";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";

class TransactionPage extends Component {
  state = {
    date: "",
    time: "",
    category: "Еда",
    sum: "",
    currency: "USD",
    comment: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTransaction, closeActivePage, transType } = this.props;
    addTransaction({
      transaction: { ...this.state, id: shortid.generate() },
      transType,
    });
    closeActivePage();
  };

  render() {
    const { closeActivePage, transType } = this.props;
    const { date, time, category, sum, currency, comment } = this.state;
    return (
      <section>
        <GoBackHeader
          title={transType === "costs" ? "Расходы" : "Доходы"}
          handleGoBack={closeActivePage}
        />
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Ok</button>
          <LabelInput
            title="День"
            type="date"
            name="date"
            value={date}
            cbOnChange={this.handleChange}
          />
          <LabelInput
            title=" Время"
            type="time"
            name="time"
            value={time}
            cbOnChange={this.handleChange}
          />
          <LabelInput
            title="Категория"
            type="button"
            name="category"
            value={category}
            cbOnClick={() => {}}
          />
          <LabelInput
            title="Сумма"
            type="number"
            name="sum"
            value={sum}
            placeholder="Введите сумму"
            cbOnChange={this.handleChange}
          />
          <LabelInput
            title="Валюта"
            type="button"
            name="currency"
            value={currency}
            cbOnClick={() => {}}
          />
          <LabelInput
            title="Комментарий"
            name="comment"
            value={comment}
            placeholder="Комментарий"
            cbOnChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default TransactionPage;
