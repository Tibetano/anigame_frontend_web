import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="flex flex-col items-center p-5 bg-slate-200">
            <h1>Página de login</h1>
            <p className="text-red-600 font-extrabold pt-1">Página está em construção.</p>
            <strong className="bg-lime-400 p-1 mt-5 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700">
            <Link to="/">Voltar para o início</Link>
            </strong>
        </div>
    );
}

export default SignIn;