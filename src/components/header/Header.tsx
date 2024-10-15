import { Link } from "react-router-dom";
import { BsInstagram, BsTwitterX, BsPersonCircle } from "react-icons/bs";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import CommonButton from "../ui-components/CommonButton/CommonButton";
import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

import  { StyledHeader, Menu }  from "./styles";

const Header = () => {
    return (
        <header>
            <StyledHeader>
                <div className="elements">
                    <a href="" className="icon" title="Siga nos no Facebook"><ImFacebook color="white" aria-label="Siga nos no Facebook" /></a>
                    <a href="" className="icon" title="Siga nos no Instagram"><BsInstagram color="white" aria-label="Siga nos no Instagram"/></a>
                    <a href="" className="icon" title="Siga nos no LinkedIn"><ImLinkedin2 color="white" aria-label="Siga nos no LinkedIn"/></a>
                    <a href="" className="icon" title="Siga nos no Twitter"><BsTwitterX color="white" aria-label="Siga nos no X"/></a>

                    <div className="sign-in-up">
                        <BsPersonCircle size={25}/>
                        <span>
                            <Link to="/account/entrar" className="sign-in">ENTRE</Link>
                            ou
                            <Link to="/account/registrar" className="sign-up">CADASTRE-SE</Link>
                        </span>
                    </div>
                </div>
            </StyledHeader>
            
            <Menu>
                <div className="content">
                    <div className="Logo">
                        <img src={Logo} className="logoImg" alt="Logo do evento" title="Logo do evento" />
                    </div>
                    <nav className="NavBar">
                        <ul className="UList">
                            <li> <Link to="/">Início</Link> </li>
                            <li> <Link to="/ingresso">Ingressos</Link> </li>
                            <li> <Link to="/programacao">Programação</Link> </li>
                            <li> <Link to="/galeria">Galeria</Link> </li>
                            <li> <Link to="/produtos">Produtos</Link> </li>
                            <li> <Link to="/sobre" className="whitespace-nowrap">Sobre o evento</Link> </li>
                            <li> <Link to="/contato">Contato</Link> </li>
                        </ul>
                    </nav>
                    <div className="menuBar">
                        <div className="icon">
                            <GiHamburgerMenu />
                        </div>
                    </div>
                    <div className="btm">
                        <CommonButton path="/" name="DONATE" css="bg-black text-white hover:bg-lime-400 px-8 py-3 font-lato font-bold text-base"/>
                    </div>
                </div>
            </Menu>
        </header>
    );
};

export default Header;