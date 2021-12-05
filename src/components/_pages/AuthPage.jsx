import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { login, register } from "../../redux/auth/authOperations";
import Form from "../_share/Form/Form";

const formOptions = [
  {
    title: "Email",
    name: "email",
    placeholder: "Input email...",
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Input password...",
  },
];

const AuthPage = () => {
  const dispatch = useDispatch();
  const { authType } = useParams();
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    authType === "register" && dispatch(register(dataForm));
    authType === "login" && dispatch(login(dataForm));
  };

  return (
    <>
      <Form
        cbOnSubmit={handleSubmit}
        formOptions={formOptions}
        dataForm={dataForm}
        handleChange={handleChange}
      />
      <Link to={authType === "register" ? "/auth/login" : "/auth/register"}>
        {authType === "register" ? "Login" : "Register"}
      </Link>
    </>
  );
};

export default AuthPage;
