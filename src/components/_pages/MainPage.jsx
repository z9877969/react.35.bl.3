import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/data/mainInfoOptions.json";

const MainPage = ({ openActivePage }) => {
  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoCosts}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoIncomes}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
      />
      <StatisticsBtns />
    </section>
  );
};

export default MainPage;
