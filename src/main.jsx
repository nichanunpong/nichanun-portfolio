import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const basename = import.meta.env.DEV ? "/" : "/nichanun-portfolio/";

createRoot(document.getElementById("root")).render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>
);
