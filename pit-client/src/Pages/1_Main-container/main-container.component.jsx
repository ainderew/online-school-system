import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../scss_variables/global.styles.scss";

//COMPONENTS
import LoginPage from "../Login-page/login-page.component";
import EnrollmentPage from "../Enrollment-page/enrollment-page.component";
import HomePage from "../Home-page/home-page.components";
import Header from "../../Components/header/header.component";

const MainContainer = () => {
  return (
    <Router>
      {/* <div className="Main-container"> */}
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/enrollment" component={EnrollmentPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      {/* </div> */}
    </Router>
  );
};

export default MainContainer;
