import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Service from "./Components/Service";


import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contact.scss";
import "./Styles/Service.scss";
import "./Styles/mediaq.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<Service />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
