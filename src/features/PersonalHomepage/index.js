import React from "react";
import { Header } from "./Header";
import { Skills } from "./Skills";
import Footer from "./Footer";
import { Portfolio } from "./Portfolio";
import { Container } from "../../common/Container";
import { SwitchTheme } from "../../common/SwitchTheme";

export const PersonalHomepage = () => (
   
        <Container>
            <SwitchTheme />
            <Header />
            <Skills />
            <Portfolio />
            <Footer />
        </Container>
    );

