import React from "react";
import {
    Wrapper,
    StyledHeader,
    SubHeader,
    Image,
    Content,
    Info,
    MessageIcon,
} from "./styled";
import photo from "./images/KJ.jpg";
import { Button } from "../Button";

export const Header = () => {
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Wrapper>
            <Image src={photo} alt=""></Image>
            <Content>
                <SubHeader>This is</SubHeader>
                <StyledHeader>Karolina Jasiówka</StyledHeader>
                <Info>
                    I'm a passionate Frontend Developer in love with React,
                    currently looking for new job opportunities as a junior
                    front-end developer. I am an ambitious, person who wants to
                    constantly develop and learn new technologies. In my work, I
                    would like to use my programming skills and creativity to
                    create modern and user-friendly solutions.
                </Info>
                <Button
                    scrollTo={scrollToFooter}
                    icon={<MessageIcon />}
                    content="Hire Me"
                />
            </Content>
        </Wrapper>
    );
};

export default Header;
