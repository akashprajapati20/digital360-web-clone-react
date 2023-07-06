import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Aboutus from "./components/Aboutus"
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Seo from "./components/Seo";
import Smm from "./components/Smm";

import ContentMarketing from "./components/ContentMarketing";
import Footer from './components/Footer';
import PaidAdvertising from './components/PaidAdvertising';
function App() {
  return (
    <>
     <Router>
     {<Navbar/>}
         <Routes>
       <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutus" element={<Aboutus/>} />
      <Route exact path="/contactus" element={<Contactus/>} />
      <Route exact path="/seo" element={<Seo/>} />
      <Route exact path="/Smm" element={<Smm/>} />
      <Route exact path="/paid_advertising" element={<PaidAdvertising/>} />
      <Route exact path="/content_marketing" element={<ContentMarketing/> } />

    </Routes>  

    <Footer/>
     </Router>
    </>
  );
}

export default App;
