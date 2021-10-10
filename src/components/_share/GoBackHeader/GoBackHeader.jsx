const GoBackHeader = ({ title, handleGoBack }) => {
  const cbOnClick = () => handleGoBack();

  return (
    <header>
      <button onClick={cbOnClick} type="button">
        GoBack
      </button>
      <h1>{title}</h1>
    </header>
  );
};

export default GoBackHeader;
