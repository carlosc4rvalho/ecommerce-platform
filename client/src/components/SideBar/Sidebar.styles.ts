import styled from 'styled-components';

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1.2rem 2.2rem;
  background-color: white;
  border-radius: 1rem;
  z-index: 100;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem; // Ajustado para dar espaço uniforme em torno do X
  right: 1rem;
  padding: 0.5rem; // Padding reduzido para diminuir o tamanho do clique
  cursor: pointer;
  font-size: 1.5rem; // Aumenta o tamanho do X para melhorar a visibilidade
  &:hover {
    opacity: 0.7; // Efeito de hover para feedback visual
  }
`;
