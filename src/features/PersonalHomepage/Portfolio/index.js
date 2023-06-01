import { Wrapper, Header, SubHeader, Icon } from "./styled";
import { PortfolioContent } from "./PortfolioContent";
import { useDispatch, useSelector } from "react-redux"; 
import { useEffect } from "react";
import { fetchPortfolio, selectPortfolio, selectPortfolioState } from "../../portfolioSlice";

export const Portfolio = () => {
    const dispatch = useDispatch();
    
    const portfolioState = useSelector(selectPortfolioState);
    const portfolio = useSelector(selectPortfolio)

    useEffect(() => {
        dispatch(fetchPortfolio())
    }, [])
    
    return (
        <Wrapper>
            <Icon />
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
            <PortfolioContent
                portfolio={portfolio}
                portfolioState={portfolioState}
            />
        </Wrapper>
    );
};

export default Portfolio;

