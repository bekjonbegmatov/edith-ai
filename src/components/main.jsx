import React, { useState, useEffect } from "react";
import Auth_email from "./auth_email/authemail";
import Register from "./register/register";
import Chat from "./chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main_component() {
  const [is_reg, setIs_reg] = useState(false);
  const [is_email_auth, setIs_email_auth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("is_registred") == "true") {
      setIs_reg(true);
    } else {
      setIs_reg(false);
    }
    if (localStorage.getItem("is_email_auth") == "true") {
      setIs_email_auth(true);
    } else {
      setIs_email_auth(false);
    }
  });
  return (
    <Router>
      {is_reg == true && is_email_auth == true && <Chat />}
      {is_reg == false && <Register />}
      {is_email_auth == false && is_reg && <Auth_email />}

    </Router>
  );
}

export default Main_component;
