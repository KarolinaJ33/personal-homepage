import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    align-self: self-end;
    margin: 115px 0px 0px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.slateGrey};
    background: transparent;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mercury};
`;
