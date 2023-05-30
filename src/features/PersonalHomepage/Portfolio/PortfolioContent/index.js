import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const PortfolioContent = ({ portfolioState, portfolio }) => {
    return <Error />;
    switch (portfolioState) {
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        case "success":
            return <Repositories portfolio={portfolio} />;

        case "initial":
            return null;

    };
};
