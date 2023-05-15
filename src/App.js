import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import Section from "./features/Section";
import Footer from "./features/Footer";


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
