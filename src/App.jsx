import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Information } from './components/Information';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navigationbar />
      <Banner/>
      <Information/>
      <Skills/>
      <Projects/>
      <Footer />
    </div>
  )
}

export default App
