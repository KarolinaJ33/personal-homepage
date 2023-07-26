import { select, call, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const isDarkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, isDarkTheme);
};

export function* watchThemeFromLocalStorage() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
};
