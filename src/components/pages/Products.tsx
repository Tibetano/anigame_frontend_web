import { Link } from "react-router-dom";

const Products = () => {
    const productsList=['Produto 1','Produto 2','Produto 3','Produto 4','Produto 5'];
    return (
        <div className="flex flex-col items-center p-5 bg-slate-200">
            <h1>Página da produtos</h1>
            <p className="text-red-600 font-extrabold pt-1">Página está em construção.</p>
            <ul>
            {
                productsList.map((p,i)=><li key={i+1} className="p-1">{p} <span className="bg-lime-400 p-1 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700"><Link to={`/produto/${i+1}`}>Ver item</Link></span></li>)
            }
            </ul>
            
            
            <strong className="bg-lime-400 p-1 mt-5 rounded font-semibold hover:text-cyan-400 hover:bg-slate-700">
            <Link to="/">Voltar para o início</Link>
            </strong>
        </div>
    );
}

export default Products;