import './listaSuspensa.css'

function ListaSuspensa(props){

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    );
}

export default  ListaSuspensa;