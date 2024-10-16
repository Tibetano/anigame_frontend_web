import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { ImFacebook, ImYoutube } from "react-icons/im";
import TextButton from "../ui-components/TextButton/TextButton";
import Logo from "../../assets/Logo.png";
import { Container, CopyRight } from "./styles";

const Footer = () => {
    return (
        <footer className="font-lato">
            <Container>
                <div className="content">

                    <div className="event">
                        <strong className="text-xl pb-5 text-slate-800">Anigame</strong>
                        <TextButton name="Início" path="https://tibetano.github.io/anigame_frontend_web/"/>
                        <TextButton name="Nosso time" path="/nossotime"/>
                        <TextButton name="Contate-nos" path="/contato"/>
                    </div>
                    <div className="socialMedias">
                        <strong className="text-xl pb-5 text-slate-800">Siga-nos</strong>
                        <div className="flex">
                            <a href="" className="pr-2.5 py-2.5" title="Siga nos no Facebook"><ImFacebook color="black" aria-label="Siga nos no Facebook"/></a>
                            <a href="" className="px-2.5 py-2.5" title="Siga nos no Instagram"><BsInstagram color="black" aria-label="Siga nos no Instagram"/></a>
                            <a href="" className="px-2.5 py-2.5" title="Siga nos no LinkedIn"><BsTwitterX color="black" aria-label="Siga nos no X"/></a>
                            <a href="" className="pl-2.5 py-2.5" title="Siga nos no Youtube"><ImYoutube color="black" aria-label="Siga nos no Youtube"/></a>
                        </div>
                    </div>
                    <div className="Logo">
                        <a href="https://tibetano.github.io/anigame_frontend_web/">
                            <img src={Logo} className="logoImg" alt="Logo do evento" title="Logo do evento" />
                        </a>
                        <p>Janaúba - Minas Gerais</p>
                    </div>
                </div>
            </Container>
            <CopyRight>
                <p>Copyright 2024 Anigame Janaúba - CNPJ: 4654876548</p>
            </CopyRight>
        </footer>
    );
};

export default Footer;
