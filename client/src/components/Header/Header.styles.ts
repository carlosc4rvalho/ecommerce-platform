import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.2rem;
  background-color: #fff;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 1rem;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const SearchBar = styled.input`
  border: none;
  border-radius: 1.2rem;
  padding: 1.2rem;
  background-color: #f5f4f4;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

