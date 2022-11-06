import styles from "../styles/Login.module.css";
import { useState,useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AppContext from "../src/components/context/context";

const Login = () => {
  const navigate = useRouter();
  const {setIsAuth} = useContext(AppContext);
  const [errorMessage,setErrorMessage] = useState("")

  const [loginForm, setLoginForm] = useState({
    username: {
      value: "",
    },
    password: {
      value: "",
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
    });
  };

  const onSubmit = async  (e) => {
    e.preventDefault();

    const {
      username: { value: username },
      password: { value: password },
    } = loginForm;

    const formData = {
      username,
      password,
    };

    try {
      await  axios.post("http://localhost:5000/api/auth/login", formData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            localStorage.setItem("userId", JSON.stringify(res.data._id))
            navigate.push("/")
            setIsAuth(true)
          }
        });
    } catch (e) {
      console.log(e.response);
      setErrorMessage("Wrong Password/Username")
    }
  };
  return (
    <div className={styles.wrapper}>
      
      <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.errorMessage}>{errorMessage}</p>

        <div>
          <label htmlFor="usernameId">Username</label>
          <input
            id="usernameId"
            value={loginForm.username.value}
            name="username"
            placeholder=" username"
            type="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password</label>
          <input
            id="passwordId"
            name="password"
            value={loginForm.password.value}
            placeholder=" Password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button className={styles.formButton}>Login</button>
      </form>
    </div>
  );
};
export default Login;
