import React from "react";
import RenderRoute from "./RenderRoute";
import "./App.css";

const App = () => {
  return (
    <>
      <RenderRoute />
    </>
  );
};

const Root = () => {
  return (
    <>
      <App />
    </>
  );
};

export default Root;
