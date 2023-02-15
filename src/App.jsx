import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/layout/Navbar";
import Landing from "./pages/layout/Landing";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfileForm from "./pages/profile-forms/ProfileForm";
import AddExperience from "./pages/profile-forms/AddExperience";
import AddEducation from "./pages/profile-forms/AddEducation";
import Profiles from "./pages/profiles/Profiles";
import Profile from "./pages/profile/Profile";
import Posts from "./pages/posts/Posts";
import Post from "./pages/post/Post";
import NotFound from "./pages/layout/NotFound";
import PrivateRoute from "./pages/routing/PrivateRoute";
import { LOGOUT } from "./Reducer/actions/types";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./Reducer/actions/auth";
import setAuthToken from "./Reducer/config/setAuthToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// STYLES SASS
import "./assets/styles/all.scss";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path="posts" element={<PrivateRoute component={Posts} />} />
          <Route path="posts/:id" element={<PrivateRoute component={Post} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
