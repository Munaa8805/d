import React from "react";
import Logo from "../../Logo/Logo.js";
import { MdSettings, MdWork, MdPersonOutline } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { GiPerson } from "react-icons/gi";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#212b33",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderLeft: "1px dotted white",
      }}
    >
      <div
        style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}
      >
        <div style={{ color: "white", marginRight: "10px" }}>
          <IconContext.Provider value={{ size: "25px" }}>
            <MdPersonOutline />
          </IconContext.Provider>
        </div>
        <div style={{ color: "white", fontSize: "16px" }}>СЭТГҮҮЛЧ</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", marginRight: "20px" }}>
          <IconContext.Provider value={{ size: "25px" }}>
            <MdSettings />
          </IconContext.Provider>
        </div>
        <NavLink to="/admin/logout">
          <div style={{ color: "white", marginRight: "50px" }}>
            <IconContext.Provider value={{ size: "25px" }}>
              <AiOutlineLogout />
            </IconContext.Provider>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
