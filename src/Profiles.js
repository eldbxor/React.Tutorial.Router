import React from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/yootaek"
            style={({ isActive }) => ({
              background: isActive ? "black" : "",
              color: isActive ? "white" : "",
            })}
          >
            yootaek
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => ({
              background: isActive ? "black" : "",
              color: isActive ? "white" : "",
            })}
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>사용자를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
