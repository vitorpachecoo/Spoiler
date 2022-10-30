import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados parar criar o card.</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Filmes, Séries e Desenhos" 
            placeholder="Digite o nome do filme, série ou desenho" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
            obrigatorio={true} 
            label="Categoria" 
            placeholder="Digite a categoria" 
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
            label="Imagem" 
            placeholder="Informe o endereço da imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)} 
        />
        <ListaSuspensa 
            obrigatorio={true} 
            label="Classificação" 
            itens={props.times} 
            valor={time}
            aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario