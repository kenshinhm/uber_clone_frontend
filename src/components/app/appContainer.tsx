import React from "react";
import { graphql } from "react-apollo";
import GlobalStyle from "../../globalStyle";
import theme from "../../theme";
import { ThemeProvider } from "../../typed-components";
import AppPresenter from "./appPresenter";
import { IS_LOGGED_IN } from "./appQueries";

const AppContainer = ({ data }) => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppPresenter isLoggedIn={data.isLoggedIn} />
            <GlobalStyle />
        </React.Fragment>
    </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
