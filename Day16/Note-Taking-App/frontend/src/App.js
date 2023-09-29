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
      {/* This is a nested Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* We should not giv absolute path */}
        <Route path="add-note/:operationName" element={<Add />} />
        <Route path="view-all" element={<View />} />
      </Route>
    </Routes>
  );
};

export default App;
