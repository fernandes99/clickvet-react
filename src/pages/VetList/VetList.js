import React from 'react';
import { Link } from "react-router-dom";

import VetItem from '../../components/Vet/Item/vetItem';
import { Container, VetListContainer, ContentHeader, FilterButton } from './styles';

export default class VetList extends React.Component {
  state = {
    loading: true,
    openModal: false,
    vetList: []
  };

  getVetList = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbyMznKdp9vqTZ9ZEws-2KpcGQuf6BM2JW5tMUsPQwzVqCydmLPVKxmHu-uPpf3Maz02/exec';
    return await fetch(url).then(res => res.json());
  }

  async componentDidMount () {
    let test = await this.getVetList();
    this.setState({
      vetList: test,
      loading: false
    });
  }

  openModal () {
    this.setState({ openModal: !this.state.openModal });
  }

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
            {
              this.state.loading
              ? <div>LOADING</div>
              : <VetListContainer>
                  {
                    this.state.vetList.map(item => (
                      <Link key={item[0]} to="/">
                        <VetItem key={item[0]} name={`${item[1]}`} appoitmentValue={`${item[2]}`} image={`${item[3]}`} about={`${item[4]}`} onClick={() => this.openModal() }/>
                      </Link>
                    ))
                  }
                </VetListContainer>
            }
        </Container>
      </>
    );
  }
}