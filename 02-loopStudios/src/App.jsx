import "./App.scss";
import Nav from "/src/components/Nav/Nav.jsx";
import Hero from "/src/components/Hero/Hero";
import ARLeader from "/src/components/ARLeader/ARLeader";
import Creations from "/src/components/Creations/Creations";
import Footer from "/src/components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ARLeader />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default App;
