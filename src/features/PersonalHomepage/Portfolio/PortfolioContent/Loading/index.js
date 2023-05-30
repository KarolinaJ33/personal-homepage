import { LoadingWrapper, Info, StyledSpinner } from "./styled";

export const Loading = () => (
    <LoadingWrapper>
        <Info>
            Please wait, projects are being loaded…
        </Info>
        <StyledSpinner/>
    </LoadingWrapper>
);