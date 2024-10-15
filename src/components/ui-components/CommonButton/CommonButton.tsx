import styled from 'styled-components';
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      right: 10px;
      opacity: 1;
    }
  }

  svg {  /* Estilizando o ícone SVG diretamente */
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    opacity: 0;
    stroke-width: 1; /* Defini a espessura do icone */
    transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover svg {
    right: 10px;
    opacity: 1;
  }
`;

type ButtonType = {
  name: string;
  css?: string;
  path: string;
};

const CommonButton: React.FC<ButtonType> = ({ name, css, path }) => {
  const buttonClass = `${css}`;

  return (
    <div>
      <Link to={path}>
        <StyledButton className={buttonClass}>
          {name}
          <BsChevronCompactRight  /> {/* Inserindo o ícone do react-icons */}
        </StyledButton>
      </Link>
      
    </div>
  );
};

export default CommonButton;
