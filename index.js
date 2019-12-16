import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MyForm from "./components/MyForm2";
import "./style.css";

const App = () => {
  return (
    <div>
      <MyForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
