import styled from "styled-components";
import { ReactComponent as GitHub } from "../icons/GitHub.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 12px 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const SubHeader = styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    /* identical to box height, or 28px */
    letter-spacing: 0.05em;
    margin: 8px 0 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
        
    }
`;

export const Icon = styled(GitHub)`
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.color.scienceBlue};
`;