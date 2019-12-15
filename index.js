import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MyForm from "./components/MyForm";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Welcome to My APP</h1>
      <MyForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
