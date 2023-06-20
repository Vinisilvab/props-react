import ListaSuspensa from "../listaSuspensa/listaSuspensa";
import CampoTexto from "./campoTexto";
import './formulario.css'

function Formulario()
{
    const times = [
        'Programação','Front-End','Data Science','Devops','UX e Desing','Mobile','Inovação e Gestão'
    ]
    return(
        <section className="formulario">
            <form>
                <CampoTexto label ='Nome' placeholder ='Digite seu nome...' />
                <CampoTexto label ='Cargo' placeholder ='Digite seu cargo...' />
                <CampoTexto label ='Idade' placeholder ='Digite sua idade...' />
                <ListaSuspensa itens={times}/>
            </form>
        </section>
    );
}
export default Formulario;