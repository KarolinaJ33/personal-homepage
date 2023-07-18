import styled from "styled-components";
import { ReactComponent as IconDanger } from "./Danger.svg";

export const Wrapper = styled.div`
    margin: 95px 0 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 95px 0 20px;
    }
`;

export const StyledIconDanger = styled(IconDanger)`
    width: 37px;
    height: 33px;
    margin: 0;
`;

export const Info = styled.p`
    margin: 23px 0 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Message = styled.p`
    margin: 23px 0 32px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;
