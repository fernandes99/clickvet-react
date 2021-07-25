import React from 'react';

import Header from '../../components/Header/header';
import { Container, Main, Info } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
          <Main>
              <Info>
                  <h1>Encontre os melhores <br /><strong>veterinários perto de você!</strong></h1>
                  <h2>Faça consultas, exames e vacinas sem sair da sua casa</h2>
              </Info>
          </Main>
      </Container>
    </>
  );
}

export default Home;