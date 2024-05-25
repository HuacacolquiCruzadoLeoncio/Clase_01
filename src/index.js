import React, { StrictMode } from "react";
import { createRoot } from "react-dom";
import Navbar from './components/Navbar';
import Header from "./Header";
import Carousel from "./components/Carousel";
import RegistrationForm from "./components/RegistrationForm";
import ServiceDescription from "./components/ServiceDescription"; 

const App = () => {
  return (
    <StrictMode>
      <Navbar />
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Carousel />
          </div>
          <div className="col-md-6">
            <RegistrationForm />
          </div>
        </div>
      </div>
      <ServiceDescription /> 
    </StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
