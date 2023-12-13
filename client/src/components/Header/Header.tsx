import React, { useState } from "react";
import { HeaderContainer, Logo, Nav, NavItem, NavMenu, SearchBar, IconContainer } from "./Header.styles";
import Sidebar from "../Sidebar/Sidebar";

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

   // Esta função alterna o estado do sidebar, mostrando-o ou escondendo-o
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="https://static.nike.com.br/v10-301-3/images/brands/logo.svg" alt="" width="65px" height="25px" />
      </Logo>

      <Nav>
        <NavItem href="#">Lançamentos</NavItem>
        <NavItem href="#">Masculino</NavItem>
        <NavItem href="#">Feminino</NavItem>
        <NavItem href="#">Infantil</NavItem>
        <NavItem href="#">Acessórios</NavItem>
        <NavItem href="#">Ofertas</NavItem>
      </Nav>

      <IconContainer>
        <SearchBar type="text" placeholder="Pesquisar..." />
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#000" className="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" /></svg>
        <svg data-testid="favorite-button" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000" viewBox="0 0 24 24" width="24px" height="24px" className="SvgIcon__Icon-sc-9dg20d-0 SvgIcon-sc-9dg20d-1 cxStEi gjIExv"><path d="M20.2541 4.73606C19.6833 4.17102 19.004 3.72618 18.2567 3.42812C17.5094 3.13006 16.7093 2.98488 15.9044 3.00124C14.4399 3.00958 13.0349 3.57912 11.9815 4.5915C10.8513 3.54671 9.35834 2.97813 7.81591 3.00509C6.27347 3.03204 4.80149 3.65244 3.70888 4.73606C1.16626 7.15758 1.48409 11.332 4.50799 14.4583L10.7193 20.4488C11.0509 20.7905 11.5043 20.9885 11.9815 21C12.4434 21.0007 12.8883 20.8262 13.2256 20.5121L13.4072 20.3404L13.9611 19.8254C14.5059 19.3104 15.2506 18.5875 16.2222 17.6478L18.4379 15.4883L19.4277 14.5215C22.497 11.3139 22.8784 7.20276 20.2541 4.73606ZM18.1201 13.2295L17.8931 13.4463L17.1666 14.1601L14.9509 16.3196C14.0428 17.2232 13.28 17.937 12.7352 18.452L11.9815 19.1929L5.7793 13.1572C3.45462 10.7537 3.1822 7.73586 4.98019 6.00104C5.36146 5.62075 5.81438 5.31903 6.31301 5.11317C6.81165 4.9073 7.3462 4.80134 7.88605 4.80134C8.4259 4.80134 8.96045 4.9073 9.45908 5.11317C9.95771 5.31903 10.4106 5.62075 10.7919 6.00104L10.8736 6.07332C10.9796 6.15344 11.077 6.24428 11.1642 6.34439L11.9815 7.19373L12.7988 6.34439L13.053 6.10043L13.1529 6.01911C13.5347 5.63473 13.9893 5.32956 14.4904 5.12128C14.9916 4.91301 15.5293 4.80576 16.0724 4.80576C16.6155 4.80576 17.1532 4.91301 17.6543 5.12128C18.1555 5.32956 18.6101 5.63473 18.9919 6.01911C20.7808 7.73586 20.5083 10.7628 18.1201 13.2295Z"></path></svg>
        <svg data-testid="BagIcon" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000" viewBox="0 0 24 24" width="24px" height="24px" className="SvgIcon__Icon-sc-9dg20d-0 SvgIcon-sc-9dg20d-1 cxStEi gjIExv"><path fillRule="evenodd" clipRule="evenodd" d="M7 6V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H19C20.1046 6 21 6.89543 21 8V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V8C3 6.89543 3.89543 6 5 6H7ZM5 8V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V8H5ZM9 6H15V4H9V6Z"></path><title>Sacola vazia</title></svg>
        <NavMenu onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#000" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </NavMenu>
        <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;
