import { Wrapper, StyledIconDanger, Info, Message } from "./styled";

export const Error = () => (
    <Wrapper>
        <StyledIconDanger />
        <Info> Ooops! Something went wrong...</Info>
        <Message>Sorry, failed to load GitHub projects.<br />
        You can check them directly on GitHub.</Message>
    </Wrapper>
);