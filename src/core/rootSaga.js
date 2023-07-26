import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "../features/portfolioSaga";
import { watchThemeFromLocalStorage } from "../common/SwitchTheme/themeSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPortfolio(),
        watchThemeFromLocalStorage(),
    ]);
}
