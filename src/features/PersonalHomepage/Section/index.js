import { Wrapper, Header, Content, List } from "./styled";

const Section = ({ title, body, sectionContent }) => (
    <Wrapper>
        <List>
            <Header>{title}</Header>
            {sectionContent}
        </List>
        <Content>{body}</Content>
    </Wrapper>
);

export default Section;
