import Layaut from './components/Layaut';
import Home from "./pages/Home"
import Portafolio from "./pages/Portafolio"
import Contac from "./pages/Contact"
import About from "./pages/About"
import { Routes, Route} from "react-router-dom";


function App() {
  

    return (
        <div className="">
            <Layaut>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portafolio" element={<Portafolio/>}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contac/>}/>
                </Routes>
            </Layaut>
        </div>
    
    )
}

export default App;
