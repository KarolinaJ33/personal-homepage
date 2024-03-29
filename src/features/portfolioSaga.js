import { delay, put, call, takeLatest } from "redux-saga/effects";
import {
    fetchPortfolio,
    fetchError,
    fetchRepositories,
} from "./portfolioSlice";
import { portfolioAPI } from "./portfolioAPI";
import { API_URL } from "../common/constans";

const DELAY_ACTION = 2000;

function* fetchPortfolioHandler() {
    try {
        yield delay(DELAY_ACTION);

        const portfolio = yield call(portfolioAPI, API_URL);
        yield put(fetchRepositories(portfolio));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* watchFetchPortfolio() {
    yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
