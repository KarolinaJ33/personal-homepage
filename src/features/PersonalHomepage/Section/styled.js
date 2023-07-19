import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
        0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 32px;
    margin: 0 0 72px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 0 50px;
        padding: 16px;
    };
    
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.section.headerUnderline};
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        padding-bottom: 12px;
    };
`;

export const List = styled.li`
    display: flex;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
    list-style: none;
    align-items: center;
    margin: 0px;
    color: ${({ theme }) => theme.colors.section.text};
    &::before {
        content: " ";
        background-color: ${({ theme }) => theme.colors.primary};
        display: block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            height: 6px;
            width: 6px;
        };
        };
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        line-height: 120%; // sprawdź ile to px na figmie w wersji mobilnej i ewentualnie podaj w px
    };
`;

export const Content = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
    grid-gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 12px 0 0;
        grid-gap: 8px;
    };
`;
