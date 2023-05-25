import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 690px;
    min-height: 280px;
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 12px;
        margin-top: 48px;
    }
`;

export const Content = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Header = styled.a`
    font-weight: 900;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.mineShaft};
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGrey};
    margin: 0;
`;

export const Container = styled.div`
    margin-top: 40px;
`;

export const Icon = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    margin-right: 24px;
    transition: 0.3s;
    color: ${({ theme }) => theme.color.mineShaft};

    &:hover {
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;
