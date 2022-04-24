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
  getVetList = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbxcNALXCmwW3zTGmT9_BG3Bvg4vZX_FtegnM49v2kaE92GTA7Url0E_PWUDPmjGD7UF/exec';
    return await fetch(url).then(res => res.json());
  }

  title = () => `Veterinários ${ this.props.params.city ? `em ${this.props.params.city}:` : 'perto de você:'}`;

  async componentDidMount () {
    this.props.dispatch({ type: 'SET_VET_LIST', value: await this.getVetList() });
    this.props.dispatch({ type: 'SET_LOADING', value: false });
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
              <h2>{ this.title() }</h2>
              <FilterButton>Filtrar</FilterButton>
            </ContentHeader>
            {
              this.props.states.loading
              ? false
              : <VetListContainer>
                  {
                    this.props.states.vetList.map(item => (
                      <Link key={item.veterinaryId} to={`${item.veterinaryId}`} state={{ vetProfileData: item }}>
                        <VetItem key={item.veterinaryId} name={`${item.name}`} appoitmentValue={`${item.appoitmentValue}`} image={`${item.profileImageUrl}`} about={`${item.about}`} />
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