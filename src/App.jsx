import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TechStack from './pages/TechStack';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="techstack"><TechStack /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;