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
    background-color: ${({ theme }) => theme.color.white};
    grid-template-columns: auto;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
        0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
    transition: 0.5s;

    &:hover {
        border: 6px solid rgba(209, 213, 218, 0.3);
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 230px;
        padding: 24px;
    };
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
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
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.slateGrey};
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    gap: 8px;
    margin: 8px 0px 0px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
    }
`;
