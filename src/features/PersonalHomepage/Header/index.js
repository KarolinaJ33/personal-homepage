import { Wrapper, StyledHeader, SubHeader, Image, Content, Info } from "./styled";
import photo from "./images/KJ.jpg";

const Header = ({ title }) => (
    <Wrapper>
        <Image src={photo} alt=""></Image>
        <Content>
            <SubHeader>This is</SubHeader>
            <StyledHeader>{title}</StyledHeader>
            <Info>
                I'm a passionate Frontend Developer in love with React,
                currently looking for new job opportunities. I am an ambitious,
                person who wants to constantly develop and learn new
                technologies.
            </Info>
        </Content>
    </Wrapper>
);

export default Header;
