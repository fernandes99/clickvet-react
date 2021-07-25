import React from 'react';

import Header from '../../components/Header/header';
import { Background, Container, Main, Info } from './styles';

const Home = () => {
  return (
    <>
      <Background>
        <Header />
        <Container>
            <Main>
                <Info>
                    <h1>Encontre os melhores <br /><strong>veterinários perto de você!</strong></h1>
                    <h2>Faça consultas, exames e vacinas sem sair da sua casa</h2>

                    <form>
                      <input placeholder={"Digite seu CEP"}/>
                      <button type="submit">Buscar</button>
                    </form>
                </Info>
                <img src={'./src/assets/img/happy-dog.png'} alt="Cachorro feliz" width="400"/>
            </Main>
        </Container>
      </Background>
    </>
  );
}

export default Home;