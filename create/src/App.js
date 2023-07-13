import Voos from './Voos';
import React from 'react';

const Titulo = () => (
  <h1>
    <span>Olá</span>
    <strong>Mundo!!</strong>
  </h1>

)
class MeuBotao extends React.Component {
// const handleClik =() =>{
//     console.log('clicou')
// }

handleClik(e){
  e.preventDefault();
  console.log('clicou', e)
}

render(){
  return (
    <button onClick={this.handleClik} type='button'>{this.props.label}</button>
  )
}
 
}

function Pessoa(props) {
  if (props.idade < 10) {
    return (
      <h4>Area restrita</h4>
    )
  }
  return (
    <section>
      Você é de {props.idade >= 18 ? <PessoaIdade label='de maior' /> : <PessoaIdade label='de menor' />}
    </section>
  )
}
function PessoaIdade(props) {
  return (
    <strong>{props.label}</strong>
  )
}
const ListaItem = ({ label }) => {
  return (
    <li>{label}</li>
  )
}
const Lista = () => {
  const passos = [
    'Configurar projetos',
    'Enbedar React',
    'Criar Comonentes',
    'Escrever teste',
    'Fazer Deploy'
  ];
  return (
    <ul>
      {passos.map((valor, index)=>(
      <ListaItem key={`item-${index}`} label={valor} />
      ))}
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <Titulo />
      {/* <Voos/> */}
      <Lista />
      <Pessoa idade={19} />
      <Pessoa idade={13} />
      <Pessoa idade={8} />
      <article>
        <h2>
          Subtitulo
        </h2>
        <p>,.asnk.fhskidhf.ahnsdhnfhnskjd</p>
      </article>
      <MeuBotao label='Aperte aqui' />
    </div>
  );
}

export default App;
