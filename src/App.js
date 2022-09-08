import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import Prices from "./Components/Prices";
import About from "./Components/About";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/landingpage" element={<LandingPage />} />
                    <Route exact path="/contact" element={<Contact />}/>
                    <Route exact path="/prices" element={<Prices />}/>
                    <Route exact path="/about" element={<About />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
