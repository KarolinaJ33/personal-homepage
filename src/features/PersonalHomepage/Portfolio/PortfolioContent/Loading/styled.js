import styled from "styled-components";
import { ReactComponent as Spinner } from "./ellipse.svg";

export const LoadingWrapper = styled.div`
    margin: 88px 0 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin: 20px;
  };
`;

export const Info = styled.p`
    margin: 0;
    line-height: 140%;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const StyledSpinner = styled(Spinner)`
    border: 11px solid ${({ theme }) => theme.colors.spinner.border};
    border-radius: 50%;
    border-right-color: ${({ theme }) => theme.colors.spinner.animation};
    animation: rotate 1.4s linear infinite;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 100px;
    width: 100px;
    border-width: 6px;
  };

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        };
    };
`;
