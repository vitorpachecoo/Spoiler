
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Melhores filmes',
      corPrimaria:'#A6D157',
      corSegundaria:'#BFEA99' 
    },
    {
      nome: 'Melhores séries',
      corPrimaria:'#82CFFA',
      corSegundaria:'#E8F8FF' 
    },
    {
      nome: 'Melhores desenhos',
      corPrimaria:'#A6D157',
      corSegundaria:'#F0F8E2' 
    },    
    {
      nome: 'Lançamentos',
      corPrimaria:'#E06B69',
      corSegundaria:'#FDE7E8' 
    }
    /*
    ,
    {
      nome: 'Séries',
      corPrimaria:'#DB6EBF',
      corSegundaria:'#FAE9F5' 
    },
    {
      nome: 'Desenhos',
      corPrimaria:'#FFBA05',
      corSegundaria:'#FFF5D9' 
    },
    {
      nome: 'Filmes, Séries e Desenhos Destaque',
      corPrimaria:'#FF8A29',
      corSegundaria:'#FFEEDF' 
    }*/
  ] 

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSegundaria={time.corSegundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    
      <Rodape/>
    </div>
  );
}

export default App;
