import styled from "styled-components";
import { ReactComponent as MsgIcon } from "../Header/icon/message.svg";

export const Wrapper = styled.header`
    display: grid;
    margin: 0 0 63px;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 13px;
        margin-bottom: 84px;
    }
`;

export const StyledHeader = styled.header`
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    margin: 12px 0 0 ;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 22px;
    }
`;

export const SubHeader = styled.h2`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGrey};
    margin-bottom: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-bottom: 8px;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    transition: 0.7s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 133px;
        height: 133px;
    }
`;

export const Content = styled.div``;

export const Info = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
        margin: 16px 0 24px;
    }
`;

export const MessageIcon = styled(MsgIcon)`
    width: 16px;
    height: 14px;
`;
