import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreEvents from "./comps/ExploreEvents";
import Header from "./comps/header";
import About from "./comps/about";
import Footer from "./comps/footer";
import Body from "./comps/body";
import Events from "./comps/events";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Body />
            <About />
            <Events />
          </>
        } />
        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/home" element={
          <>
          <Body />
          <About />
          <Events />
        
        </>
          } />
  
        
        <Route path="/events" element={<ExploreEvents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
