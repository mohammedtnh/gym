import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: black;
  &.active {
    color: red;
  }
`;

export const StyledLink = styled(Link)`
  img {
    width: 10%;
    hight: 10%;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  p {
    text-align: center;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const AddButtonStyled = styled(BsPlusCircle)`
  height: 2rem;
  width: 2rem;
  color: green;
  float: right;
`;
