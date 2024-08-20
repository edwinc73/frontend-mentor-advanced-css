import "./App.scss";
import Contact from "./component/Contact/Contact";
import Download from "./component/Download/Download";
import Faq from "./component/FAQ/FAQ";
import Features from "./component/Features/Features";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Features />
        <Download />
        <Faq />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
