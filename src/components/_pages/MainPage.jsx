import { useContext } from "react";
import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import { BaseContext } from "../BaseProvider/BaseProvider";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/data/mainInfoOptions.json";

const MainPage = () => {
  const { toggleActivePage } = useContext(BaseContext);
  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={toggleActivePage}
        options={mainInfoCosts}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={toggleActivePage}
        options={mainInfoIncomes}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        openActivePage={toggleActivePage}
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
      />
      <StatisticsBtns openActivePage={toggleActivePage} />
    </section>
  );
};

export default MainPage;
