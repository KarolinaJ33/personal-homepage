import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 160px;
    font-size: 20px;
    padding: 12px 16px;
    height: 49px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    line-height: 24px;
    letter-spacing: 0.05em;
    transition: 0.3s;
    font-family: inherit;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
        box-shadow: 2px -2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            -2px 2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            2px 2px 0 ${({ theme }) => theme.colors.buttonLink.hover},
            -2px -2px 0 ${({ theme }) => theme.colors.buttonLink.hover};
    }
    &:active {
        box-shadow: inset 0 2px 0
            ${({ theme }) => theme.colors.buttonLink.active};
        border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 46px;
        font-size: 18px;
    }
`;

export const ButtonLink = styled.a`
    text-decoration: none;
`;
