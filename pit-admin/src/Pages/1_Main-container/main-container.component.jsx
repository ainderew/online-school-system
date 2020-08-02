import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import "../../scss_variables/global.styles.scss";

//COMPONENTS
import LoginPage from "../Login-page/login-page.component";
import CreateClassPage from "../Create-class-page/create-class.component"
import HomePage from "../Home-page/home-page.components";
import ProspectusPage from "../Prospectus-page/prospectus-page.component";
import Header from "../../Components/header/header.component";

const MainContainer = () => {
  const userData = useSelector(state => state.userData)
  console.log(Object.entries(userData).length)
  return (
    <Router>
      {/* <div className="Main-container"> */}
        {(Object.entries(userData).length === 0) ? null : <Header />}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/createClass" component={CreateClassPage} />
          <Route exact path="/home" component={(Object.entries(userData).length === 0) ? LoginPage : HomePage} />
          <Route exact path="/prospectus" component={(Object.entries(userData).length === 0) ? LoginPage : ProspectusPage} />
        </Switch>
      {/* </div> */}
    </Router>
  );
};

export default MainContainer;
