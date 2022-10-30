import './Botao.css'

const Botao = (props) => {
  return (
    <button className='botao efeito'>
      {props.children}
    </button>
  )
}

export default Botao