import styled from 'styled-components';

const StyledButton = styled.button`
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

  &::after {
    content: '>';
    position: absolute;
    top: 50%;
    right: 20px; /* Ajuste a posição conforme necessário */
    transform: translateY(-50%);
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      right: 10px;
      opacity: 1;
    }
  }
`;

type ButtonType = {
    name:string,
    //size?:string,
    //backgroundColor?:string,
    //hoverbackgroundColor?:string,
    //borderColor?:string,
    //hoverBorderColor?:string,
    //textColor?:string,
    //hoverTextColor?:string,
    css?:string
};

const CommonButton: React.FC<ButtonType> = ({name,css})=>{

    const buttonClass = `${css}`;
    //`${backgroundColor} ${size} font-lato font-bold text-white hover:bg-lime-400 border-2 border-black px-8 py-3`

    return (
            <div>
                <StyledButton className={buttonClass}>{name}</StyledButton>
            </div>
    );
};

export default CommonButton;
