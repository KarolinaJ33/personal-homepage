import { PersonalHomepage } from "../../features/PersonalHomepage";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";

export const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    </Provider>
);
