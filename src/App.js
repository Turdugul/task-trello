
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Home from "./components/login/Home";


function App() {
  return (
    <div>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sidebar" element={<Sidebar />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
