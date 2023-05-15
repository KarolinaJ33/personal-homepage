import styled from "styled-components";

export const Wrapper = styled.footer`
max-width: 690px;
min-height: 280px;
margin: 10px;
`;

export const Content = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 140%;
letter-spacing: 0.05em;
`;

export const Caption = styled.p`
font-weight: 700;
font-size: 12px;
line-height:130%;
text-transform: uppercase;
color: ${({ theme }) => theme.color.slateGrey};
`;

export const Link =styled.a`
font-weight: 900;
font-size: 32px;
line-height: 39px;
letter-spacing: 0.05em;
color: ${({ theme }) => theme.color.mineShaft};
`;