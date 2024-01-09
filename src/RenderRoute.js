import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

const RenderRoute = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((i) => (
          <Route key={i.path} path={i.path} element={i.component} />
        ))}
      </Routes>
    </Router>
  );
};

export default RenderRoute;
