import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
  return (
    <section className='time' style={{ backgroundColor: props.corSegundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo}/>)}
    </section>
  )
}

export default Time 