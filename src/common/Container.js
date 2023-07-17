import styled from "styled-components";

export const Container = styled.main`
    max-width: 1276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px 30px;
   

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: auto;
        padding: 0px 14px 31px;   
    };
`;