const localStorageKey = "isDarkTheme";

export const saveThemeInLocalStorage = isDarkTheme =>
    localStorage.setItem(localStorageKey, JSON.stringify(isDarkTheme));

    export const getThemeLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) !== false;