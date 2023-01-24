import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Header />
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboardtasks" element={<DashboardTasks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
