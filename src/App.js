import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiances from "./components/Experiances";
import Footer from "./components/Footer";
import Header from "./components/header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";
import Works from "./components/works";

function App() {
  return (
    <main>
      <section>
        <div className="relative">
          <div className="w-full z-50 flex h-fit justify-center items-start mt-4 md:h-[100vh] md:w-fit md:fixed md:items-center md:right-4">
            <Header />
          </div>
        </div>
      </section>
      <section id="home">
        <Landing />
      </section>
      <section id="me">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiance-education">
        <Experiances/>
      </section>
      <section id="works">
        <div className="flex flex-col  justify-center items-center gap-10 padding">
          <Works />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="social-link">
        <SocialMedia />
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
