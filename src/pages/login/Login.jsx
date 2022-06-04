import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {

      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials,
      );
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAIL",
          payload: { message: "Доступ невозможен!" },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FALE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          id="username"
          placeholder="Введите ваше имя"
          className="loginInput"
          onChange={handleChange}
        />
        <input
          type="passwotd"
          id="password"
          placeholder="Введите пароль"
          className="loginInput"
          onChange={handleChange}
        />
        <button disabled={loading} className="loginBtn" onClick={handleClick}>
          Войти
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
