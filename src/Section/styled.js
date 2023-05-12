import styled from "styled-components";

export const Wrapper = styled.section`
background-color: ${({ theme }) => theme.color.white};
max-width: 1216px;
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
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
`;

export const Content = styled.div`
margin: 12px 32px;
padding: 16px 0px;
`;
