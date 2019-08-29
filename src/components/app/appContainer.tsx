import React from "react";
import { graphql } from "react-apollo";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import GlobalStyle from "../../globalStyle";
import theme from "../../theme";
import { ThemeProvider } from "../../typed-components";
import AppPresenter from "./appPresenter";
import { IS_LOGGED_IN } from "./appQueries";

const AppContainer = ({ data }) => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <AppPresenter isLoggedIn={data.isLoggedIn}/>
                <GlobalStyle/>
            </React.Fragment>
        </ThemeProvider>
        <ToastContainer draggable={true} position='bottom-center'/>
    </React.Fragment>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
