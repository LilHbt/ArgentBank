import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Login/Login";
import User from "../pages/User/User";
import SignUp from "../pages/SignUp/SignUp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/userActions";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Navigation = () => {
  const { token } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem("token");
      const isChecked = "";
      if (token) {
        getUser(isChecked, token, dispatch);
      }
    };
    getToken();
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!token && <Route path="/Login" element={<SignIn />} />}
        {!token && <Route path="/SignUp" element={<SignUp />} />}
        {token && <Route path="/Profile" element={<User />} />}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default Navigation;
