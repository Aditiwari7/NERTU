import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Workshop from "./routes/Workshop";
import Projects from "./routes/Projects";
import Publication from "./routes/Publication";
import Staff from "./routes/Staff";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import Gallery from "./routes/Gallery";

export default function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/workshop" element={<Workshop/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/staff" element={<Staff/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/publication" element={<Publication/>}/>
          </Routes>
          <Navbar/>
    </div>
  );
}
