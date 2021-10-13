import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Header from '../../components/Header/header';
import { Background, Container, Main, Info } from './styles';
import dogImage from '../../assets/img/happy-dog.png';

export default class Home extends React.Component {
  state = {
    cep: "",
    address: {}
  };

  constructor (props) {
    super(props);
  }

  setCepValue = event => {
    this.setState({cep: event.target.value});
  }

  searchCEP = () => {
    if (this.state.cep.length <= 0) {
      let emojis = ['😊','🙃', '🤪', '🤓', '🤯', '😉'];
      let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      toast('Insira seu CEP', {
        icon: randomEmoji,
      });

      return;
    }

    axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(res => {
        console.log(res);
        toast.success(<b>CEP encontrado!</b>);
        this.setState({address: res.data});
      })
      .catch(error => {
        console.log('Error', error.message);
        toast.error(<b>CEP não encontrado.</b>);
      });
  }

  handleKeyDown = ev => {
    if (ev.key === 'Enter') return this.searchCEP();

    const isNumber = isFinite(ev.key);
    if (this.state.cep.length > 8 && isNumber) ev.preventDefault();
  }

  render() {
    return (
      <>
        <Background>
          <Header />
          <Container>
              <Main>
                  <Info>
                      <h1>Encontre os melhores <br /><strong>veterinários perto de você!</strong></h1>
                      <h2>Faça consultas, exames e vacinas sem sair da sua casa</h2>

                      <div>
                        <input type="number" onChange={this.setCepValue} onKeyDownCapture={this.handleKeyDown} placeholder={"Digite seu CEP"}/>
                        <button onClick={this.searchCEP}>Buscar</button>
                      </div>
                  </Info>
                  <img src={dogImage} alt="Cachorro feliz" width="420"/>
              </Main>


          </Container>
          <Toaster position="bottom-center" />
        </Background>
      </>
    );
  }
}