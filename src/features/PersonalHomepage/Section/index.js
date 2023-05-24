import { Wrapper, Header, Content, List } from "./styled";

export const Section = ({ title, skills }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Content>
            {skills.map(skill => (
            <List>{skill}</List>
            ))}
            </Content>
    </Wrapper>
);

