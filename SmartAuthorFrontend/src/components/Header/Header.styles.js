import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../theme/Themes";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: ${theme.colors.white};
  position: relative;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  @media ${theme.media.sm} {  
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${theme.colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 20px;

  @media ${theme.media.sm} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media ${theme.media.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: ${theme.colors.white};
    position: absolute;
    top: 60px;
    left: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
  }
`;

export const NavItem = styled.div`
  margin: 10px 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${theme.font.size.medium};
  font-family: ${theme.font.family};
  color: ${(props) => (props.isActive ? theme.colors.navy : theme.colors.black)};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  position: relative;
  padding-bottom: 2px;
  cursor: pointer;

  &.active {
    color: ${theme.colors.navy};
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${(props) => (props.isActive ? "100%" : "0%")};
    height: 2px;
    background-color: ${theme.colors.navy};
    // transition: width 0.3s ease-in-out; 
  }

  // &:hover::after {
  //   width: 100%;
  // }
`;


export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media ${theme.media.sm} {  
    display: block;
  }
`;
