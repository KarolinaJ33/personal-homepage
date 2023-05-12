import Header from "./Header";
import { Container } from "./Container/styled";
import Section from "./Section";


function App() {
  return (
   
    <Container>
      <Header title= "Karolina Jasiówka" />
      <Section title= "My skillset includes" body="React" />

      <Section title= "What I want to learn next"  body="React" />
    </Container>
  );
}

export default App;
