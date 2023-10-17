import React, { useState, useEffect } from "react";
import "./register.css";
function Register() {
  const [is_register, setIs_register] = useState(false);

  // AUTH
  const [login, setLogin] = useState("");
  const [auth_password, setAuth_password] = useState("");

  // REGISTER
  const [email, setEmail] = useState("");
  const [r_password, setR_password] = useState("");
  const [name, setName] = useState("");

  // ERROR
  const [err, setEror] = useState("");
  const [is_press, setIs_press] = useState(false);
  function auth_user() {
    if (login.length == 0 || login.length <= 4) {
      alert("логен не должно быть меньше 4 символов !");
      return false;
    } else if (auth_password.length == 0) {
      alert("Пожалуйста введите пароль !");
      return false;
    }
    fetch("https://edithai.pythonanywhere.com/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        password: auth_password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Auth);
        if (data[0].Auth == true) {
          if (data[0].is_email_auth == true) {
            localStorage.setItem("is_email_auth", "true");
          } else {
            localStorage.setItem("is_email_auth", "false");
          }
          localStorage.setItem("is_registred", "true");
          localStorage.setItem("user", login);
          localStorage.setItem("email", data[0].Email);
          localStorage.setItem("password", auth_password);
          window.location.reload();
        } else {
          console.log(data[0].Error);
          setEror(data[0].Error);
        }
      });
  }
  function register_user() {
    if (is_press) {
      return false;
    }
    if (name.length == 0 || name.length <= 4) {
      alert("имя недолжно быть меньше 4 символов !");
      return false;
    } else if (email.length == 0) {
      alert("видите e-mail");
      return false;
    } else if (r_password.length == 0) {
      alert("Пожалуйста введите пароль !");
      return false;
    }
    fetch("https://edithai.pythonanywhere.com/create/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: r_password,
        email: email,
        is_email_auth: false,
        email_code: "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].Auth);
        if (data[0].Auth == true) {
          if (data[0].is_email_auth == true) {
            localStorage.setItem("is_email_auth", "true");
          } else {
            localStorage.setItem("is_email_auth", "false");
          }
          localStorage.setItem("is_registred", "true");
          localStorage.setItem("user", name);
          localStorage.setItem("email", email);
          localStorage.setItem("password", r_password);
          window.location.reload();
        } else {
          localStorage.setItem("is_registred", "false");
        }
      });
    setIs_press(true);
  }
  function get_login(event) {
    let login = event.target.value;
    setLogin(login);
  }
  function get_password(event) {
    let password = event.target.value;
    setAuth_password(password);
  }
  function get_email(event) {
    let email = event.target.value;
    setEmail(email);
  }
  function get_r_passwod(event) {
    let r_password = event.target.value;
    setR_password(r_password);
  }
  function get_name(event) {
    let name = event.target.value;
    setName(name);
  }
  return (
    <div className="">
      {!is_register && (
        <div className="forma">
          <h1>Edith Ai</h1>
          <h1 className="">Aвторизация</h1>
          <input
            type="text"
            className="form form-control"
            onChange={get_login}
            value={login}
            placeholder="Login"
          />
          <br />
          <input
            type="password"
            onChange={get_password}
            value={auth_password}
            className="form form-control"
            placeholder="Пароль"
          />
          <p>{err}</p>
          <br />
          <p>
            {" "}
            ещё нет аккаунта ?{" "}
            <i
              className="blue"
              onClick={() => {
                if (is_register) {
                  setIs_register(false);
                } else {
                  setIs_register(true);
                }
              }}
            >
              Регистрация
            </i>
          </p>
          <p
            onClick={() => {
              let emai = prompt("введите ваш e-mail");
              if (emai != null && emai.length != 0) {
                fetch(
                  "https://edithai.pythonanywhere.com/user/password/resend",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: emai,
                    }),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    alert(data[0].message);
                  });
              }
            }}
          >
            забыли пароль
          </p>
          <button onClick={auth_user} className="btn btn-light">
            войти
          </button>
        </div>
      )}
      {is_register && (
        <div className="forma">
          <h1>Edith Ai</h1>
          <h1 className="">Регистрация</h1>
          <input
            type="text"
            className="form form-control"
            onChange={get_name}
            value={name}
            placeholder="Имя"
          />
          <br />
          <input
            type="text"
            onChange={get_email}
            value={email}
            className="form form-control"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            onChange={get_r_passwod}
            value={r_password}
            className="form form-control"
            placeholder="Пароль"
          />
          <br />
          <p>
            {" "}
            Уже есть аккаунта ?{" "}
            <i
              className="blue"
              onClick={() => {
                if (is_register) {
                  setIs_register(false);
                } else {
                  setIs_register(true);
                }
              }}
            >
              Aвторизация
            </i>
          </p>
          <button className="btn btn-light" onClick={register_user}>
            Регистрация
          </button>
        </div>
      )}
    </div>
  );
}

export default Register;
