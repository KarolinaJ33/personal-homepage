import { ButtonLink, StyledButton } from "./styled";

export const Button = ({ destinationLink, content, icon }) => (
    <ButtonLink href={destinationLink} target="_blank" rel="noreferrer">
        <StyledButton>
            {icon}
            {content}
        </StyledButton>
    </ButtonLink>
);