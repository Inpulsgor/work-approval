import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import api from "../../services/api";

const LogoutButton = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .check()
      .then((res) => console.log("check", res))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    dispatch(authOperations.logout());
  };

  return (
    <button className="logout-btn" onClick={handleLogout} type="submit">
      Logout
    </button>
  );
};

export default LogoutButton;
