import { Wrapper, Caption, Content, Header, Container, Icon } from "./styled";
import { ReactComponent as Github } from "./icons/GitHub.svg";
import { ReactComponent as Linkedin } from "./icons/LinkedIn.svg";

const Footer = () => (
    <Wrapper>
        <Caption>Let's talk</Caption>
        <Header>jasiowkakarolina@gmail.com</Header>
        <Content>
            I'm always open to new projects whenever I have the time. If you
            have a website, dashboard or mobile app in mind and need some help
            to make your ideas come to life, feel free to contact me.
        </Content>
        <Container>
            <Icon
                target="_blank"
                rel="noreferrer"
                href="https://github.com/KarolinaJ33"
            >
                <Github />
            </Icon>
            <Icon
                target="_blank"
                rel="noreferrer"
                href="https://https://www.linkedin.com/in/karolina-jasi%C3%B3wka/"
            >
                <Linkedin />
            </Icon>
        </Container>
    </Wrapper>
);

export default Footer;
