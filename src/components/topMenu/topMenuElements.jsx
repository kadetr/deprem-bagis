import styled from "styled-components";
import { Button, Input, Space } from "antd";


export const Header = styled.div`
   height: 100px;
   display: flex;
   position: relative;
   margin-bottom: 16px;
`;

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: start;
   height: 100px;
   margin-top:32px;
   width: 100%;
   max-width: 1100px;
`;

export const LogoContainer = styled.div`
   margin-top: 32px;
   min-width: 280px;
`

export const Logo = styled.div`
   color: #44CB83;
   font-weight: 900;
   font-size: 64px;
   
`;

export const SearchArea = styled(Input)`
   height: 45px; 
   margin: 16px 16px 0 16px;
   background-color: #f3f3f3;
   min-width: 35%;

   &:hover,
   &:active{
      background-color: #f3f3f3;
   }
`

export const SignUpButton = styled.button`
   background-color: #44CB83;
   color: #ffffff;
   margin-top: 16px;
   padding: 0 32px;
   font-size: 16px;
   font-weight: 700;
   border-width:0;
   border-radius: 10px;
   height:45px;
   width: 180px;
`

export const SocialMediaContainer = styled.div`
   margin: 28px 16px 0 16px;
   display: flex;
`

export const RestContainer = styled(Space)`
margin: 0 16px 0 16px;
   display: flex;
`
