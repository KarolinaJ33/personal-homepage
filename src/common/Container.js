import styled from "styled-components";

export const Container = styled.main`
    max-width: 1276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 115px 30px 30px;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: auto;
        padding: 32px 14px 31px;
        
    };
`;