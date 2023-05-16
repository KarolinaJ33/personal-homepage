
import Header from "./features/PersonalHomepage/Header";
import { Container } from "./features/PersonalHomepage/Container/styled";
import Section from "./features/PersonalHomepage/Section";
import Footer from "./features/PersonalHomepage/Footer";

function App() {
  return (
   <>
    <Container>
      <Header title= "Karolina Jasiówka" />
      <Section title= "My skillset includes" body="React" />

      <Section title= "What I want to learn next"  body="TypeScript" />
    </Container>
    <Footer />
    </>
  );
}

export default App;
