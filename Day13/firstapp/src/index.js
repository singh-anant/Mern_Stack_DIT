import ReactDOM from "react-dom/client";
import App from "./App";
// Bridge file(connect App.js with index.js)
// Maps VDOM with DOM-->USES ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
