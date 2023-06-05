import { select, call, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectDarkTheme, toggleTheme } from "./themeSlice";


function* saveThemeInLocalStorageHandler() {
    const isDarkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, isDarkTheme);
};

export function* watchThemefromLocalStorage() {
    yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
};