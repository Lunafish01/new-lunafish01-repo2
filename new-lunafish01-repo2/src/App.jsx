import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") return <AboutMe />;
    if (currentPage === "ContactMe") return <ContactMe />;
    if (currentPage === " Portfolio") return <Portfolio />;
  };

  return (
    <>
      <div className="">
        <Header />
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}

export default App;
