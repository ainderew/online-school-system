import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "../../scss_variables/global.styles.scss"

//COMPONENTS
import LoginPage from "../Login-page/login-page.component";
import EnrollmentPage from "../Enrollment-page/enrollment-page.component";

const MainContainer = () => {
    return(
        <div className="Main-container">
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/enrollment" component={EnrollmentPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainContainer;