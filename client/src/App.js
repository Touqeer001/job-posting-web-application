import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPasssword from "./Components/Auth/ForgotPasssword";
import Home from "./Components/Home";
import AdminDashbord from "./Components/Admin/AdminDashbord";
import AdminMenu from "./Components/Admin/AdminMenu";
import CreateCategory from "./Components/Admin/CreateCategory";
import CreateJob from "./Components/Admin/CreateJob";
import User from "./Components/User/User.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/dashboard/admin" element={<Admind/>}></Route> */}
        <Route path="/dashboard/admin" element={<AdminDashbord />}></Route>
        <Route
          path="/dashboard/admin/create-category"
          element={<CreateCategory />}
        />

        <Route path="/dashboard/admin/create-job" element={<CreateJob />} />
        <Route path="/dashboard/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
