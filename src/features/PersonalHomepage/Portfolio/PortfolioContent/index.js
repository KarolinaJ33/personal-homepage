import { Loading } from "./Loading";
import { Error } from "./Error";
import { Repositories } from "./Repositories";

export const PortfolioContent = ({ portfolioState, portfolio }) => {
    
    switch (portfolioState) {
        case "loading":
            return <Loading />;

        case "success":
            return <Repositories portfolio={portfolio} />;

        default:
            return <Error />;

    };
};
