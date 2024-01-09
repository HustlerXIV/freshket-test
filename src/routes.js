import Calculator from "./facades/Calculator/Calculator";
import Home from "./facades/Home/Home";
import ResponsiveCard from "./facades/ResponsiveCard/ResponsiveCard";

export const ROUTES = [
  { path: "/", component: <Home /> },
  { path: "/responsive-card", component: <ResponsiveCard /> },
  { path: "/calculator", component: <Calculator /> },
];
