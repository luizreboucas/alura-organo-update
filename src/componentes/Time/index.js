import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time,times, colaboradores,aoDeletar,mudarCorDoTime,favoritar }) => {
    return (
            
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input 
                type={'color'} 
                className='input-cor' 
                value={time.cor}
                onChange={(e)=>{
                   mudarCorDoTime(e.target.value,time.id)
                    
                }}
                />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    
                    return(
                        <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} favoritar={favoritar}/>)}
                    )
                }
                
                
            </div>
        </section>

    )
}

export default Time