import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Form from "./components/MyForm2";
import "./style.css";

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
