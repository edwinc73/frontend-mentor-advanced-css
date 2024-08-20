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
      </main>
      <footer>
        <Contact />
        <Footer />
      </footer>
    </>
  );
}

export default App;

// <!-- Question 1 -->
// What is Bookmark?

// <!-- Answer 1 -->
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
// justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare
// mattis.

// <!-- Question 2 -->
// How can I request a new browser?

// <!-- Answer 2 -->
// Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
// ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
// convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
// imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue
// massa, ultricies non ligula. Suspendisse imperdiet.

// <!-- Question 3 -->
// Is there a mobile app?

// <!-- Answer 3 -->
// Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum
// dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra
// mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.

// <!-- Question 4 -->
// What about other Chromium browsers?

// <!-- Answer 4 -->
// Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at
// euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut
// velit. More Info 35,000+ already joined Stay up-to-date with what we’re
// doing Contact Us Features Pricing Contact

// <footer>
//   <p class="attribution">
//     Challenge by
//     <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
//       >Frontend Mentor</a
//     >. Coded by <a href="#">Your Name Here</a>.
//   </p>
// </footer>
