import React from 'react';
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import VetItem from '../../components/Vet/Item/vetItem';
import { Container, VetListContainer, ContentHeader, FilterButton } from './styles';

// for use params route in class component
// https://stackoverflow.com/questions/58548767/react-router-dom-useparams-inside-class-component
function withRouter (Component) {
  return props => <Component {...props} params={useParams()} location={useLocation()} />;
}

class VetList extends React.Component {
  state = {
    openModal: false,
    vetList: []
  };

  getVetList = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbyMznKdp9vqTZ9ZEws-2KpcGQuf6BM2JW5tMUsPQwzVqCydmLPVKxmHu-uPpf3Maz02/exec';
    return await fetch(url).then(res => res.json());
  }

  async componentDidMount () {
    this.setState({
      vetList: await this.getVetList()
    });

    this.props.dispatch({ type: 'SET_LOADING', value: false });
  }

  openModal () {
    this.setState({ openModal: !this.state.openModal });
  }

  constructor (props) {
    props.dispatch({ type: 'SET_LOADING', value: true });
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
              this.props.states.loading
              ? false
              : <VetListContainer>
                  {
                    this.state.vetList.map(item => (
                      <Link key={item[0]} to={`${item[1]}`}>
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

export default withRouter(VetList);