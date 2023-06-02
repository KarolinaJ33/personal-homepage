import styled from "styled-components";
import { ReactComponent as Spinner } from "./elipse.svg";

export const LoadingWrapper = styled.div`
    margin: 88px 0 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;

export const Info = styled.p`
    margin: 0;
    line-height: 140%;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.mineShaft};
`;

export const StyledSpinner = styled(Spinner)`
    border: 11px solid ${({ theme }) => theme.color.iron};
    border-radius: 50%;

    animation: rotate 1.4s linear infinite;

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
`;
