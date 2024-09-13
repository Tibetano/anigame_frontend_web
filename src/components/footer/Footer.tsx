import { BsInstagram } from "react-icons/bs";
import { ImFacebook, ImLinkedin2, ImYoutube } from "react-icons/im";
import TextButton from "../ui-components/TextButton";

const Footer = () => {
    return (
        <footer className="font-lato">
            <div className="flex justify-between bg-white px-56">
                <div className="flex flex-col pl-56 py-16">
                    <strong className="text-xl pb-5 text-slate-800">Anigame</strong>
                    <TextButton name="Início"/>
                    <TextButton name="Nosso time"/>
                    <TextButton name="Contate-nos"/>
                </div>
                <div className="flex flex-col py-16">
                    <strong className="text-xl pb-5 text-slate-800">Siga-nos</strong>
                    <div className="flex">
                        <a href="" className="pr-2.5 py-2.5" title="Siga nos no Facebook"><ImFacebook color="black" aria-label="Siga nos no Facebook"/></a>
                        <a href="" className="px-2.5 py-2.5" title="Siga nos no Instagram"><BsInstagram color="black" aria-label="Siga nos no Instagram"/></a>
                        <a href="" className="px-2.5 py-2.5" title="Siga nos no LinkedIn"><ImLinkedin2 color="black" aria-label="Siga nos no LinkedIn"/></a>
                        <a href="" className="pl-2.5 py-2.5" title="Siga nos no Youtube"><ImYoutube color="black" aria-label="Siga nos no Youtube"/></a>
                    </div>
                </div>
                <div className="flex justify-center items-center pr-56 py-16">
                    <p className="bg-slate-700">LogoMarca</p>
                </div>
            </div>
            <div className="flex justify-center bg-black">
                <p className="text-white p-10">Copyright 2024 Anigame Janaúba - CNPJ: 4654876548</p>
            </div>
        </footer>
    );
};

export default Footer;
