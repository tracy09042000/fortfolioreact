import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Fortfolio from "./components/fortfolio/Fortfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.css"
import { useState } from "react";
import Menu from "./menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro/>
      <Fortfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
