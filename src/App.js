import Chat from "./components/chat";
import Register from "./components/register/register";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Auth_email from "./components/auth_email/authemail";

import GlassParticleAnimation from "./components/logoanimation";

const App = () => {
  const [is_reg, setIs_reg] = useState(false)
  const [is_email_auth, setIs_email_auth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('is_registred') == 'true') {
      setIs_reg(true)
    } else {
      setIs_reg(false)
    }
    if (localStorage.getItem('is_email_auth') == 'true') {
      setIs_email_auth(true)
    }else{
      setIs_email_auth(false)
    }
  })
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Router>
        {(is_reg == true && is_email_auth == true) &&
          <Chat />
        }{is_reg == false &&
          <Register />
        }{is_email_auth == false && is_reg && 
          <Auth_email />
        }
        {/* <GlassParticleAnimation /> */}
      </Router>

    </div>
  );
};

export default App;