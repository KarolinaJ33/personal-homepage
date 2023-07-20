import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    align-self: flex-end;
    margin: 115px 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 32px 0 0;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: inherit;
    background: transparent;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    border: none;
    cursor: pointer;
    padding: 0;
    text-transform: uppercase;
    outline-offset: 8px;
`;

export const Text = styled.span`
    margin: 3px 12px 0 0;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    border-radius: 13px;
    display: flex;
    padding: 3px;
    width: 48px;
    border: 1px solid ${({ theme }) => theme.colors.switchTheme.border};
    background: ${({ theme }) => theme.colors.switchTheme.background};
`;

export const IconWrapper = styled.span`
    border-radius: 100%;
    display: flex;
    background: ${({ theme }) => theme.colors.switchTheme.backgroundIcon};
    padding: 3px;
    transition: transform 0.3s;

    ${({ moveToRight }) =>
        moveToRight &&
        css`
            transform: translateX(20px);
        `};
`;

export const Icon = styled(SunIcon)`
    fill: ${({ theme }) => theme.colors.switchTheme.icon};
`;
