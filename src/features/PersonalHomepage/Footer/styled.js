import styled from "styled-components";

export const Wrapper = styled.footer`
    align-self: flex-start;
    max-width: 690px;
    min-height: 280px;

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
    margin-top: 24px;
    margin-bottom: 36px;
    color: ${({ theme }) => theme.colors.footer.primary};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        line-height: 17px;
        margin-top: 12px;
    }
`;

export const Header = styled.a`
    font-weight: 900;
    line-height: 39px;
    letter-spacing: 0.05em;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.footer.primary};
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.footer.hover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-transform: uppercase;
    margin-bottom: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
        margin-bottom: 12px;
    }
`;

export const Container = styled.div`
    margin-top: 40px;
`;

export const Icon = styled.a`
    width: 48px;
    height: 48px;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    margin-right: 24px;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.footer.primary};

    &:hover {
        color: ${({ theme }) => theme.colors.footer.hover};
    }
`;
