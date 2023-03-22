import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavMenu = styled.nav`
    background-color: #1E293A;
    width: 320px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
`

export const NavMenuItems = styled.ul`
    width: 100%;
    padding: 0;
    margin-left: 48px;
`

export const NavItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0 8px 16px;
    list-style: none;
    height: 24px;
    width: 180px;
`

export const NavText = styled.span`
    margin-left: 16px;
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
`

export const NavIcon = styled(Link)`
   text-decoration: none;
`

export const NavHeaders = styled.span`
    margin-left: 24px;
    font-size: 12px;
    color : #64748B;
`
export const IBBLogo = styled.img`
    display: block;
    margin: 64px 0 0 32px;
    height: 90px;
`