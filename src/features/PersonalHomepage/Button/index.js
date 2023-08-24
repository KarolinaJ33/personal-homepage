import { ButtonLink, StyledButton } from "./styled";

export const Button = ({ destinationLink, content, icon, scrollTo }) => {
    if (scrollTo) {
        return (
            <StyledButton onClick={scrollTo} title="jasiowkakarolina@gmail.com" >
                {icon}
                {content}
            </StyledButton>
        );
    } else {
        return (
            <ButtonLink href={destinationLink} target="_blank" rel="noreferrer">
                <StyledButton>
                    {icon}
                    {content}
                </StyledButton>
            </ButtonLink>
        );
    }
};
