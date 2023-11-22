import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Users from "./Pages/Users";
import AddEditUser from "./Pages/AddEditUser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add-edit-user" element={<AddEditUser />} />
          <Route path="/add-edit-user/:userId" element={<AddEditUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
