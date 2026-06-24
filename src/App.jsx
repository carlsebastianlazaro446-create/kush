import Home from './pages/Home';
import About from './pages/About';
import TechStack from './pages/TechStack';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Experience />
      <Contact />
    </>
  );
}

export default App;