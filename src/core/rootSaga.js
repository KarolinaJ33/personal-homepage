import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "../features/portfolioSaga";

export default function* rootSaga() {
    yield all([watchFetchPortfolio()]);
}
