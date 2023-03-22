import styled from "styled-components";
import { Input, Radio } from "antd";

export const Form = styled.form`
    display: flex;
   justify-content: center;
   align-items: center;
`

export const FormElementContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    margin-bottom: 16px;
    justify-content: center;
`;

export const FormHeader = styled.div`
   height: 32px;
   margin-top:32px;
   width: 100%;
   text-align: center;
   font-size: 24px;
   font-weight: 800;
   color: #4F4F4F;
`;
export const FormSubHeader = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #9DA8C3;
    text-align: center;
`

export const Select = styled.select`
    height: 40px;
    margin-top: 24px;
    width: 300px;
    border-radius: 10px;
`

export const InfoText = styled.div`
   color: #4F4F4F;
   font-weight: 800;
   font-size: 18px;
   text-align: left;
   margin-top: 64px;
`;

export const InfoInput = styled(Input)`
   height: 40px; 
   width: 300px;
   margin-top: 16px;
`

export const GDPRRadio = styled(Radio)`
    margin-top: 16px;
`

export const ApplicationButton = styled.button`
   background-color: #44CB83;
   color: #ffffff;
   font-size: 16px;
   font-weight: 700;
   margin-top: 64px;
   border-width:0;
   border-radius: 10px;
   height:45px;
   width: 300px;
`

export const GenericButton = styled.button`
    background-color: #44CB83;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
    border-width:0;
    border-radius: 10px;
    height:45px;
    width: 300px;
    cursor: pointer;
`
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
`;

export const FileInput = styled(Input)`
   height:8px;
   width: 300px;
   visibility: hidden;
   &:focus,
   &: active {
    outline: none;
   }
`

export const FileLabel = styled.label`
    min-height: 120px; 
    width:300px;
    text-align: center;
    border: 2px solid #9DA8C3;
    cursor: pointer;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Donations = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 32px;
    width: 300px;
    height:600px;
`;

export const DonationsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    margin: 32px 0 16px 32px;
    justify-content: center;
    height:450px;
    overflow: scroll;
`;