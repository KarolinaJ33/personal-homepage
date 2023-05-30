import styled from "styled-components"; 
import { ReactComponent as IconDanger } from "./Danger.svg";

export const Wrapper = styled.div`
margin: 95px opx 140px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const StyledIconDanger = styled(IconDanger)`
width:37px;
height: 33px;
margin: 0;
`;

export const Info = styled.p`
margin: 23px 0 23px;
font-weight: 700;
font-size: 24px;
line-height: 29px;
text-align: center;
letter-spacing: 0.05em; 
`;

export const Message = styled.p`
margin: 23px 0 32px;
font-weight: 400;
font-size: 20px;
line-height: 140%;
text-align: center;
letter-spacing: 0.05em;
`;