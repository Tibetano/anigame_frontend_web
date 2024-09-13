import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="flex flex-col items-center bg-red-800">
            <h1>Página de contatos</h1>
            <p>Está página está em construção.</p>
            <strong>
            <Link to="/">&gt;&gt;&gt;Voltar para o início.&lt;&lt;&lt;</Link>
            </strong>
        </div>
    );
}

export default Contact;