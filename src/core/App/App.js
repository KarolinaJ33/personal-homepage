import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { selectDarkTheme } from "../../common/SwitchTheme/themeSlice";
import { useSelector } from "react-redux";
import { dark, light } from "../App/theme";
import { GlobalStyle } from "./GlobalStyle";
import store from "../store";

export const App = () => {
    const darkTheme = useSelector(selectDarkTheme);

    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme ? dark : light}>
                <GlobalStyle />
                <PersonalHomepage />
            </ThemeProvider>
        </Provider>
    );
};
