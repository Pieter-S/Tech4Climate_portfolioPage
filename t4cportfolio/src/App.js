import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Contact';
import Topics from './Topics';
import Home from './Home';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Route path='/about' element={<About/>} />
            <About />
          <Routes path="/contact" element={<Contact/>} />
            <Contact />
          <Routes path="/" element={<Home/>} />
            <Home />
        
      </div>
    </Router>
  );
}




// export default App;

// function App() {
//   return( 
//   <div className="App" >
//     Hello
    
    
    
//     <Router exact path="/" component={Home} />
//     <Router exact path="/contact" component={Contact} />
//     <Router exact path="/topics" component={Topics} />
//     <Router exact path="/about" component={About} />
//     </div>
//   );
// }

{/* <Contact />
    <Topics />
    <Home />
    <About /> */}