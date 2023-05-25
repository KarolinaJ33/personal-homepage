import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    padding: 12px 16px;
    height: 49px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    font-family: Inter;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    cursor: pointer;
    line-height: 24px;
    letter-spacing: 0.05em;
    transition: 0.3s;
    position: absolute;
    

    &:hover {
        box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff,
            2px 2px 0px #8cc2ff, -2px -2px 0px #8cc2ff;
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 46px;
        font-size: 18px;
    }
`;

export const ButtonLink = styled.a`
    text-decoration: none;
`;
