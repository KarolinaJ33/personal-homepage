import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkTheme: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: state => {
            state.darkTheme = !state.darkTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeSliceState = state => state.theme;
export const selectDarkTheme = state => selectThemeSliceState(state).darkTheme;

export default themeSlice.reducer;