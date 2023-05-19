import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 66px;
align-items: center;
margin-bottom: 63px;`

export const StyledHeader = styled.header`
font-style: normal;
font-weight: 900;
font-size: 38px;
line-height: 46px;
max-width: 900px;
margin: 10px auto;
`;

export const SubHeader = styled.h2`
font-weight: 700;
font-size:12px;
line-height: 16px;
text-transform: uppercase;
color: ${({ theme }) => theme.color.slateGrey};
margin-bottom:12px;
`;

export const Image = styled.img`
max-width: 100%;
height: auto;
border-radius: 50%;
transition:0.7s;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 133px;
        height: 133px;
    }
`;

export const Content = styled.div``;

export const Info = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;`

