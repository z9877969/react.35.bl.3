import LabelInput from "../LabelInput/LabelInput";

const Form = ({ cbOnSubmit, formOptions, dataForm, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Ok</button>
      {formOptions.map((option) => (
        <LabelInput
          key={option.name}
          {...option}
          value={dataForm[option.name]}
          cbOnChange={handleChange}
        />
      ))}
    </form>
  );
};

export default Form;
