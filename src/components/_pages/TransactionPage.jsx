import { useContext, useState } from "react";
import shortid from "shortid";
import { BaseContext } from "../BaseProvider/BaseProvider";
import Form from "../_share/Form/Form";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import transactionFormOptios from "../../assets/options/transactionFormOptions";

const TransactionPage = () => {
  const {
    toggleActivePage,
    addTransaction,
    activePage: transType,
  } = useContext(BaseContext);

  const [form, setForm] = useState({
    date: "",
    time: "",
    category: transType === "incomes" ? "Зарплата" : "Еда",
    sum: "",
    currency: "USD",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    addTransaction({
      transaction: { ...form, id: shortid.generate() },
      transType,
    });
    toggleActivePage();
  };

  return (
    <section>
      <GoBackHeader
        title={transType === "costs" ? "Расходы" : "Доходы"}
        handleGoBack={toggleActivePage}
      />
      <Form
        cbOnSubmit={handleSubmit}
        dataForm={form}
        formOptions={transactionFormOptios}
        handleChange={handleChange}
      />
    </section>
  );
};

export default TransactionPage;


