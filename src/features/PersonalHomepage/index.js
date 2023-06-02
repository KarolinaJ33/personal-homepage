import { Header } from "./Header";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { Container } from "../../common/Container";

export const PersonalHomepage = () => (
    <Container>
        <Header />
        <Skills />
        <Portfolio />
        <Footer />
    </Container>
); 