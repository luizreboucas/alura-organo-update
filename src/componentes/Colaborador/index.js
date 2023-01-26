import './colaborador.css'
import { FaWindowClose } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'



const Colaborador = ({ colaborador, corDeFundo,aoDeletar,favoritar }) => {
    return (<div className="colaborador">
        <FaWindowClose 
            size={25} 
            className='deletar' 
            onClick={()=>aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div onClick={()=>favoritar(colaborador.id)}>
                {colaborador.favorito? <MdFavorite color={corDeFundo} /> : <MdFavorite color={'gray'} />} 
            </div>
        </div>
    </div>)
}

export default Colaborador