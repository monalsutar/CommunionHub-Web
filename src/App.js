import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreEvents from "./comps/ExploreEvents";
import Header from "./comps/header";
import About from "./comps/about";
import Footer from "./comps/footer";
import Body from "./comps/body";
import Events from "./comps/events";
import Login from "./comps/login";
import Signup from "./comps/signup";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />
        <Route path="/explore" element={
          <>
            <Header />
            <ExploreEvents />
            <Footer />
          </>
        } />
        <Route path="/home" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />

        <Route path="/body" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />


        <Route path="/events" element={
          <>
            <Header />
            <ExploreEvents />
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


      </Routes>

    </Router>
  );
}

export default App;
