import React from "react";
import {graphql} from "react-apollo";
import AppPresenter from "./appPresenter";
import {IS_LOGGED_IN} from "./appQueries";

const AppContainer = ({data}) => <AppPresenter isLoggedIn={data.isLoggedIn}/>;

export default graphql(IS_LOGGED_IN)(AppContainer);
