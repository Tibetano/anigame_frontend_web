import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return (
        <div className="flex flex-col items-center p-5">
            <p className="p-5 font-semibold">Erro 404!</p>
            <strong className="bg-lime-400 p-1 mt-5 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700">
            <Link to="/">Voltar para o início</Link>
            </strong>
        </div>
    );
}

export default ErrorPage;