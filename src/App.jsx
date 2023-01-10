import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Information } from './components/Information';
import { Skills } from './components/Skills';

function App() {

  return (
    <div className="App">
      <Navigationbar />
      <Banner/>
      <Information/>
      <Skills/>
    </div>
  )
}

export default App
