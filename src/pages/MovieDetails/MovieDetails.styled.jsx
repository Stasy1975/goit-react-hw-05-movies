import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

export const BtnGoBack = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color: tan;
  border-radius: 5px;
  cursor: pointer;
  padding: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const Podcasts = styled(NavLink)`
  display: flex;
  margin-bottom: 15px;
`;

export const ListPodcasts = styled.ul`
  padding: 15px;
  list-style: none;
  margin: 0;
`;

export const ListBorder = styled.ul`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;


export const Poster = styled.img`
  width: 300px;
`;


export const List = styled.ul`
  padding-left: 0;
  margin-left: 60px;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 30px;
`;