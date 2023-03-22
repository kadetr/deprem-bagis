import React from "react";
import { IconContext } from "react-icons";
import {RxTriangleDown} from "react-icons/rx";
import { SideMenuDataArray } from "./SideMenuData";
import { NavMenu, NavMenuItems, NavItem, NavIcon, NavText, NavHeaders, IBBLogo } from "./sideMenuElements";
import ibb from "../../assets/images/ibb.png";

export default function SideMenu() {

  return (
    <div>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <NavMenu>
          <NavMenuItems>
            {SideMenuDataArray.map((item) => {
              return (
                item.title === "Dashboard" ?
                <>
                    <NavHeaders>PAGES</NavHeaders>
                    <NavItem key={item.title}>
                        <NavIcon to={item.path}>
                            {item.icon}
                            <NavText>{item.title}</NavText>
                        </NavIcon>
                        {item.dropdown === "true" && <RxTriangleDown style={{height: "20px", width: "20px", color: "#ffffff", marginLeft: "auto", marginRight: "0"}} />}
                    </NavItem>
                </>
             : item.title === "Authentication" ?
             <>
                    <NavHeaders>MORE</NavHeaders>
                    <NavItem key={item.title}>
                        <NavIcon to={item.path}>
                            {item.icon}
                            <NavText>{item.title}</NavText>
                        </NavIcon>
                        {item.dropdown === "true" && <RxTriangleDown style={{height: "20px", width: "20px", color: "#ffffff", marginLeft: "auto", marginRight: "0"}} />}
                    </NavItem>
                </>:
                <NavItem key={item.title}>
                  <NavIcon to={item.path}>
                    {item.icon}
                    <NavText>{item.title}</NavText>
                  </NavIcon>
                  {item.dropdown === "true" && <RxTriangleDown style={{height: "20px", width: "20px", color: "#ffffff", marginLeft: "auto", marginRight: "0"}} />}
                </NavItem>
              );
            })}
            <NavItem>
            <IBBLogo src={ibb} />
            </NavItem>
          </NavMenuItems>
          
        </NavMenu>
        
        
      </IconContext.Provider>
      
    </div>
  );
}