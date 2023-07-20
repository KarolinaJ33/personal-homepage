import styled from "styled-components";

export const List = styled.ul`
    max-width: 1215px;
    margin: 24px 0 120px;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        margin: 24px 0 0;
    };
`;

export const ListItem = styled.li`
    display: grid;
    background-color: ${({ theme }) => theme.colors.tile.background};
    grid-template-columns: auto;
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
        0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
    transition: 0.5s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
        
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 230px;
        padding: 24px;
    };
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    };
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 24px 0 16px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        margin: 16px 0 16px 0;
    };
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    gap: 8px;
    margin: 8px 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-decoration: none;

    &:hover {
        filter: brightness(140%);
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 120%;
    };
`;
