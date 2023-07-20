import { delay, put, call, takeLatest } from "redux-saga/effects";
import {
    fetchPortfolio,
    fetchError,
    fetchRepositories,
} from "./portfolioSlice";
import { portfolioAPI } from "./portfolioAPI";

const DELAY_ACTION = 2000;

function* fetchPortfolioHandler() {
    try {
        yield delay(DELAY_ACTION);
        const portfolio = yield call(portfolioAPI);
        yield put(fetchRepositories(portfolio));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* watchFetchPortfolio() {
    yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
