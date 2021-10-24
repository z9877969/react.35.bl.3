const StatisticsBtns = ({ openActivePage }) => {
  return (
    <>
      <button onClick={() => openActivePage("costsHistory")} type="button">
        Все расходы
      </button>
      <button onClick={() => openActivePage("incomesHistory")} type="button">
        Все доходы
      </button>
    </>
  );
};

export default StatisticsBtns;
