import React from 'react';
import { SidebarContainer, CloseButton } from './Sidebar.styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>X</CloseButton>
    </SidebarContainer>
  );
};

export default Sidebar;
