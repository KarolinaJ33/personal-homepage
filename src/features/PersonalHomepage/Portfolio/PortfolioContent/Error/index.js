import { Wrapper, StyledIconDanger, Info, Message } from "./styled";
import { Button } from "../../../Button";

export const Error = () => (
    <Wrapper>
        <StyledIconDanger />
        <Info> Ooops! Something went wrong...</Info>
        <Message>
            Sorry, failed to load GitHub projects.
            <br />
            You can check them directly on GitHub.
        </Message>
        <Button
            destinationLink="https://github.com/KarolinaJ33"
            content="Go to GitHub"
        />
    </Wrapper>
);
