import Test_using from "./components/testusing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Introdusing from "./components/intro/introdusing";

import Main_component from "./components/main";
const App = () => {
  const [notrhing, setNothing] = useState(false)

  useEffect(() => {
    localStorage.setItem('test_using' , 'no' )
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
        {localStorage.getItem('test_using') == 'yes' && <Test_using/>}
        {localStorage.getItem('go_to_chat') == 'yes' && <Main_component/>}
        {(localStorage.getItem('test_using') == 'no' && localStorage.getItem('go_to_chat') !== 'yes') && <Introdusing />}
      </Router>
    </div>
  );
};

export default App;