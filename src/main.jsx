import "./index.css";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { TodoProvider } from "./utils/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
