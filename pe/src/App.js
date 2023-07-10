import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import FormAddEdit from './components/FromAddEdit';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add" element={<FormAddEdit />}></Route>
        <Route path="/update/:id" element={<FormAddEdit />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
