import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const navigate = useNavigate();
  useEffect(() => {
    axios("http://localhost:2020/products").then((data) => console.log(data));
  });

  return (
    <div></div>
    // <div className="app">
    //   <Header />
    //   <div className="body">
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="dashboard" element={<Dashboard />} />
    //         <Route path="dashboardtasks" element={<DashboardTasks />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </div>
    // </div>
  );
}

export default App;
