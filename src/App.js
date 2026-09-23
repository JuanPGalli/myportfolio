import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Work />
        <Contact />
      </main>
      <SocialSidebar />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
