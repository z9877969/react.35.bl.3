const GoBackHeader = ({ title, handleGoBack, children }) => {
  const cbOnClick = () => handleGoBack();

  return (
    <header>
      <button onClick={cbOnClick} type="button">
        GoBack
      </button>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

export default GoBackHeader;
