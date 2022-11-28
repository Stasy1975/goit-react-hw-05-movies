import styled from "@emotion/styled"
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  margin-left: 30px;
  text-decoration: none;
`;

export const Head = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f4dff0;
  box-shadow: inset 0 2px 3px rgba(0,0,0,0.1),
             2px 2px 3px rgba(0,0,0,0.3)
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px; 
`;