import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Classes />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
