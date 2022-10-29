
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#A6D157',
      corSegundaria:'#BFEA99' 
    },
    {
      nome: 'Front-End',
      corPrimaria:'#82CFFA',
      corSegundaria:'#E8F8FF' 
    },
    {
      nome: 'Data Science',
      corPrimaria:'#A6D157',
      corSegundaria:'#F0F8E2' 
    },    
    {
      nome: 'Devops',
      corPrimaria:'#E06B69',
      corSegundaria:'#FDE7E8' 
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#DB6EBF',
      corSegundaria:'#FAE9F5' 
    },
    {
      nome: 'Mobile',
      corPrimaria:'#FFBA05',
      corSegundaria:'#FFF5D9' 
    },
    {
      nome: 'Inovação e Gestor',
      corPrimaria:'#FF8A29',
      corSegundaria:'#FFEEDF' 
    }
  ] 

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
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
