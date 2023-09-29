import Add from "./modules/notes/components/Add";
import View from "./modules/notes/components/View";
import Dashboard from "./modules/notes/pages/Dashboard";
import UserPage from "./modules/user/pages/UserPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // It is just like switch case where path is acting as case.
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default App;
