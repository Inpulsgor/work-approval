import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();

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
