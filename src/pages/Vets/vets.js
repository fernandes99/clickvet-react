import React from 'react';
import VetItem from '../../components/Vet/Item/vetItem';
import { Container, VetList, ContentHeader, FilterButton } from './styles';

export default class Vets extends React.Component {
  state = {};

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container>
            <ContentHeader>
              <h2>Veterinários perto de você:</h2>
              <FilterButton>Filtrar</FilterButton>
            </ContentHeader>
            <VetList>
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
                <VetItem name="Roberto Fernandes" appoitmentValue="R$ 80,00" image="https://i.imgur.com/3YWZFpf.png" />
            </VetList>
        </Container>
      </>
    );
  }
}