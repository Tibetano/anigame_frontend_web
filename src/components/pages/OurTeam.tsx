import { Link } from "react-router-dom";

const OurTeam = () => {

    const developmentTeam = [
        'vegeta@principeDosSayajins.com',
        'naruto@aldeiaDaFolha.com',
        'deadpool@fourthWallBreaker.com',
        'light.yagami@cadernoDeMorte.com',
        'spider.man@teiaDoBairro.com',
        'saitama@sociedadeDosHeróis.com'
    ];
    const organizationTeam =[
        'goku@kameHouse.com',
        'batman@gothamCitymail.com',
        'wonderwoman@amazonsOfThemyscira.com',
        'luffy@piratasDoChapeuDePalha.com'
    ];

    return (
        <div className="flex flex-col items-center p-5 bg-slate-200">
            <h1>Página de informações do nosso time</h1>
            <p className="text-red-600 font-extrabold pt-1">Página está em construção.</p>

            <strong className="pt-2">Direção</strong>
            <ul className="flex flex-col items-center">
                {
                    organizationTeam.map((p,i)=><li key={i}>{p}</li>)
                }
            </ul>
            <strong className="pt-2">Desenvolvimento</strong>
            <ul className="flex flex-col items-center">
                {
                    developmentTeam.map((p,i)=><li key={i}>{p}</li>)
                }
            </ul>

            <strong className="bg-lime-400 p-1 mt-5 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700">
            <Link to="/">Voltar para o início</Link>
            </strong>
        </div>
    );
}

export default OurTeam;