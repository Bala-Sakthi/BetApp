import React from "react";
import Router from "./routes";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UpArrowButton from '../src/components/UpArrow';







function App() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
    
      <Router />
      <UpArrowButton/>

    
    </div>
  );
}

export default App;
