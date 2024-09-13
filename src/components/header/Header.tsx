import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import CommonButton from "../ui-components/CommonButton";

const Header = () => {
    return (
        <header>
            <div className="flex justify-end bg-black px-56">
            <div className="flex">
                <a href="" className="px-2.5 py-3.5" title="Siga nos no Facebook"><ImFacebook color="white" aria-label="Siga nos no Facebook" /></a>
                <a href="" className="px-2.5 py-3.5" title="Siga nos no Instagram"><BsInstagram color="white" aria-label="Siga nos no Instagram"/></a>
                <a href="" className="px-2.5 py-3.5" title="Siga nos no LinkedIn"><ImLinkedin2 color="white" aria-label="Siga nos no LinkedIn"/></a>
                <a href="" className="pl-2.5 py-3.5" title="Siga nos no Twitter"><ImTwitter color="white" aria-label="Siga nos no Twitter"/></a>
            </div>
            </div>
            <div className="flex justify-between bg-white items-center px-56 py-8">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center h-32 w-80 bg-slate-500">
                        <p>LogoMarca</p>
                    </div>
                    <nav className="font-openSans font-medium">
                        <ul>
                            <div className="flex text-base text-slate-700">
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/">Início</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/ingresso">Ingressos</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/programacao">Programação</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/galeria">Galeria</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/loja">Loja</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/sobre">Sobre o evento</Link>
                                </li>
                                <li className="transition duration-500 hover:text-slate-500 px-3 py-2">
                                    <Link to="/contato">Contato</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div>
                    <CommonButton name="DONATE" css="bg-black text-white hover:bg-lime-400 px-8 py-3 font-lato font-bold text-base"/>
                </div>
            </div>
        </header>
    );
};

export default Header;