import { Wrapper, Header, Content } from "./styled";

const Section = ({ title, body }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Content>{body}</Content>
    </Wrapper>
);

export default Section;