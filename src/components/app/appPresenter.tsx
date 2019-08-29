import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AddPlace from "../../routes/addPlace";
import EditAccount from "../../routes/editAccount";
import FindAddress from "../../routes/findAddress";
import Home from "../../routes/home";
import Login from "../../routes/login";
import PhoneLogin from "../../routes/phoneLogin";
import Place from "../../routes/place";
import Ride from "../../routes/ride";
import Setting from "../../routes/setting";
import SocialLogin from "../../routes/socialLogin";
import VerifyPhone from "../../routes/verifyPhone";

interface IProps {
    isLoggedIn: boolean;
}

const LoggedOutRoutes: React.SFC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Login}/>
        <Route path={"/phone-login"} component={PhoneLogin}/>
        <Route path={"/verify-phone/:number"} component={VerifyPhone}/>
        <Route path={"/social-login"} component={SocialLogin}/>
    </Switch>
);

const LoggedInRoutes: React.SFC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Home}/>
        <Route path={"/ride"} exact={true} component={Ride}/>
        <Route path={"/edit-account"} exact={true} component={EditAccount}/>
        <Route path={"/settings"} exact={true} component={Setting}/>
        <Route path={"/places"} exact={true} component={Place}/>
        <Route path={"/add-place"} exact={true} component={AddPlace}/>
        <Route path={"/find-address"} exact={true} component={FindAddress}/>
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);

const AppPresenter: React.SFC<IProps> = ({isLoggedIn}) => (
    <BrowserRouter>
        {isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}
    </BrowserRouter>
);

// AppPresenter.propTypes = {
//     isLoggedIn: PropTypes.bool.isRequired
// };

export default AppPresenter;
