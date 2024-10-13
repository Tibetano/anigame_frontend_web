import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa'; // Ícone do react-icons
import './styles.css'; // Arquivo CSS para estilos

interface StylizedButtonProps {
  name: string;
}

const StylizedButton: React.FC<StylizedButtonProps> = ({ name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="stylized-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={`icon ${hovered ? 'hovered' : ''}`}>
        <FaReact />
      </span>
      {name}
    </button>
  );
};

export default StylizedButton;
