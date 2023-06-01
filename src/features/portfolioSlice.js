import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        portfolio: null,
        portfolioState: "loading",
    },
    reducers: {
        fetchPortfolio: () => ({
            portfolioState: "loading",
            portfolio: null,
        }),
        fetchRepositories: (_, { payload: portfolio }) => ({
            portfolioState: "success",
            portfolio,
        }),
        fetchError: () => ({
            portfolioState: "error",
            portfolio: null,
        }),
    },
});

export const {
    fetchPortfolio,
    fetchRepositories,
    fetchError,
} = portfolioSlice.actions;

export const selectPortfolioSliceState = state => state.portfolio;
export const selectPortfolio = state => selectPortfolioSliceState(state).portfolio;
export const selectPortfolioState = state => selectPortfolioSliceState(state).portfolioState;

export default portfolioSlice.reducer;