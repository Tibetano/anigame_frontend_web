import { Link, useParams } from "react-router-dom";

const Product = () => {
    const {id}=useParams();
    return (
        <div className="flex flex-col items-center p-5 bg-slate-200">
            <h1>Página de informações do <span className="text-lime-500">produto {id}</span>.</h1>
            <p className="text-red-600 font-extrabold pt-1">Página está em construção.</p>
            <strong className="bg-lime-400 p-1 mt-5 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700">
            <Link to="/produtos">Voltar para produtos</Link>
            </strong>
        </div>
    );
}

export default Product;