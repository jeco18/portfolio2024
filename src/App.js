import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="w-5/6 mx-auto">
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Certificates/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
