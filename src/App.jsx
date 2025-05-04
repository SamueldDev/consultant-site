


// import './App.css'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'

// function App() {


//   return (
//     <>

//       <Navbar />
//       <Hero />
//       <Services />
//       <Testimonials />
//       <About />
//       <Contact />
//       <Footer />
//       <h1>Boy</h1>
//     </>
//   )
// }

// export default App




// src/App.jsx
import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";


// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
