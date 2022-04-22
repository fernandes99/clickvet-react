import React from 'react';
import axios from 'axios';

import toast from "react-hot-toast";
import { Container, Main, Info } from './styles';
import dogImage from '../../assets/img/happy-dog.png';
import Services from '../../components/Services/services';

export default class Home extends React.Component {
  state = {
    cep: localStorage.getItem('CEPSearched') ?? '',
    address: {},
    cepSearched: localStorage.getItem('CEPSearched')
  };

  constructor (props) {
    super(props);
  }

  setCepValue = event => this.setState({cep: event.target.value});

  searchCEP = () => {
    if (this.state.cep.length <= 0) {
      const emojis = ['😊','🙃', '🤪', '🤓', '🤯', '😉'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      return toast('Insira seu CEP', {
        icon: randomEmoji,
      });
    }

    axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(res => {
        toast.success(<b>CEP encontrado!</b>);
        this.setState({ address: res.data });

        return this.props.navigate(`veterinarios/${this.state.address.localidade}`, { state: { test: 'teste' } });
      })
      .catch(error => {
        console.log('Error', error.message);
        toast.error(<b>CEP não encontrado.</b>);
      })
      .finally(localStorage.setItem('CEPSearched', `${this.state.cep}`));
  }

  handleKeyDown = ev => {
    if (ev.key === 'Enter') return this.searchCEP();

    const isNumber = isFinite(ev.key);
    if (this.state.cep.length > 8 && isNumber) ev.preventDefault();
  }

  render() {
    return (
      <>
        <Container>
            <Main>
                <Info>
                    <h1>Encontre os melhores <br /><strong>veterinários perto de você!</strong></h1>
                    <h2>Faça consultas, exames e vacinas sem sair da sua casa</h2>
                    <div>
                      <input type="number" defaultValue={this.state.cepSearched} onChange={this.setCepValue} onKeyDownCapture={this.handleKeyDown} placeholder={"Digite seu CEP"}/>
                      <button onClick={this.searchCEP}>Buscar</button>
                    </div>
                </Info>
                <img src={dogImage} alt="Cachorro feliz" width="420"/>
            </Main>
        </Container>
        <Services />
      </>
    );
  }
}