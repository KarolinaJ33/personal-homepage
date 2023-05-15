import styled from "styled-components";

export const Wrapper = styled.section`
background-color: ${({ theme }) => theme.color.white};
max-width: 1216px;
height: 404px;
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
left: calc(50% - 328px/2 - 410px);
top: 608px;

@media (max-width: ${({ theme })=> theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
}
`;

export const Header = styled.h2`
margin: 32px 0 10px 22px;
padding: 5px 5px 5px 10px;
justify-content: space-between;
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 36px;
text-align: left;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
}
`;

export const List = styled.header`
align-content: center;
align-items: center;
margin-bottom: 10px;
border-bottom: 1px solid ${({ theme }) => theme.color.whiteLilac};
padding: 5px 5px 5px 20px;
justify-content: space-between;
`;

export const Content = styled.div`
padding: 0 20px 15px 20px;
`;
