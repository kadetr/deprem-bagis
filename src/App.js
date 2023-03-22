import React from 'react';
import SideMenu from './components/sideMenu/SideMenu';
import TopMenu from './components/topMenu/TopMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DonationForm from './components/donationForm/DonationForm';

function App() {
  return (
    <Router>
    <div className="App">
      <TopMenu />
      <SideMenu />
      <DonationForm />
    </div>
    </Router>
  );
}

export default App;