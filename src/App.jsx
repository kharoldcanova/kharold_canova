import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/Navbar';
import { Banner } from './components/Banner';

function App() {

  return (
    <div className="App">
      <Navigationbar />
      <Banner/>
    </div>
  )
}

export default App
