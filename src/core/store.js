import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducers from "../common/SwitchTheme/themeSlice";
import portfolioReducers from "../features/portfolioSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducers,
        theme: themeReducers,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
