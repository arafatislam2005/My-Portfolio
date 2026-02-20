import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/sections/Home';
// import About from './components/sections/About';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen bg-black text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Home />
        {/* <About /> */}
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;