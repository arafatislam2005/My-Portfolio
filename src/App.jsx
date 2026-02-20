import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* All sections will now sit on a black background */}
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;