import { Wrapper, StyledHeader, SubHeader, Image, Content, Info, MessageIcon } from "./styled";
import photo from "./images/KJ.jpg";
import { Button } from "../Button";

const Header = ({ title }) => (
    <Wrapper>
        <Image src={photo} alt=""></Image>
        <Content>
            <SubHeader>This is</SubHeader>
            <StyledHeader>Karolina Jasiówka</StyledHeader>
            <Info>
                I'm a passionate Frontend Developer in love with React,
                currently looking for new job opportunities. I am an ambitious,
                person who wants to constantly develop and learn new
                technologies.
            </Info>
            <Button
                destinationLink="mailto:jasiowkakarolina@gmail.com"
                icon={<MessageIcon />}
                content="Hire Me"
            />
        </Content>
    </Wrapper>
);

export default Header;
