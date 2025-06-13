import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthLayout from "./pages/AuthLayout";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        
        <Route path="/dashboard" element={<div className="p-6">Welcome to the dashboard!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
