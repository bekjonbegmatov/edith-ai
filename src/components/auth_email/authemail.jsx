import React, { useState, useEffect } from "react";

function Auth_email() {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  function get_email_code(event) {
    let code = event.target.value;
    setCode(code);
  }
  function confirm_email() {
    if (code.length != 6) {
      setErr("видите код подтверждения");
      return false;
    }
    fetch("https://edithai.pythonanywhere.com/user/auth/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: localStorage.getItem("user"),
        password: localStorage.getItem("password"),
        email: localStorage.getItem("email"),
        email_code: code,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data[0].is_email_auth == true) {
          localStorage.setItem("is_email_auth", "true");
          window.location.reload();
        }
        setErr(data[0].error);
      });
  }
  return (
    <div className="forma">
      <h1>Подтвердите ваш аккаунт</h1>
      <p>{localStorage.getItem("email")}</p>
      <input
        onChange={get_email_code}
        type="text"
        className="form form-control"
        maxlength="6"
        placeholder="-  -  -  -  - "
      />
      <i> введите код который отправлен на ваш e-mail</i>
      <br />
      <br />
      <button
        className="btn btn-light ml-3"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        назад
      </button>
      <button className="btn btn-light" onClick={confirm_email}>
        подтвердить
      </button>
    </div>
  );
}

export default Auth_email;
