import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import N8nUpload from "./components/N8nUpload";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // or './components/Ter' if renamed
import LoginModal from "./components/LoginModal";
import "./App.css";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header openLogin={() => setLoginOpen(true)} />
      <Hero />
      <About />
      <N8nUpload />
      <Contact />
      <Footer />
      <LoginModal open={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default App;
