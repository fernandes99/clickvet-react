import { Modal } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import VetItem from '../../components/Vet/Item/vetItem';
import { Container, VetListContainer, ContentHeader, FilterButton } from './styles';

const VetList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const states = useSelector(state => state);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const title = () => `Veterinários ${ params.city ? `em ${params.city}:` : 'perto de você:'}`;
  const getVetList = async () => {
    const url = 'https://script.google.com/macros/s/AKfycby2VgYMaGmv9e8iGZHySJqx4hjSvUUI6CWDq-rE2Jc4v8qsnttsZY7p058x1USJotnl/exec';
    return await fetch(url).then(res => res.json());
  }

  useEffect(async () => {
    dispatch({ type: 'SET_LOADING', value: true });
    dispatch({ type: 'SET_VET_LIST', value: await getVetList() });
    dispatch({ type: 'SET_LOADING', value: false });
  }, []);

  return (
    <>
      <Container>
          <ContentHeader>
            <h2>{ title() }</h2>
            <FilterButton onClick={handleOpen}>Filtrar</FilterButton>
          </ContentHeader>
          {
            states.loading
            ? false
            : <VetListContainer>
                {
                  states.vetList.map(item => (
                    <Link key={item.veterinaryId} to={`${item.veterinaryId}`} state={{ vetProfileData: item }}>
                      <VetItem key={item.veterinaryId} name={`${item.name}`} appoitmentValue={`${item.appoitmentValue}`} image={`${item.profileImageUrl}`} about={`${item.about}`} />
                    </Link>
                  ))
                }
              </VetListContainer>
          }
      </Container>
      <Modal open={open} onClose={handleClose}><span>Teste</span></Modal>
    </>
  );
}

export default VetList;


// class VetList extends React.Component {
//   getVetList = async () => {
//     const url = 'https://script.google.com/macros/s/AKfycby2VgYMaGmv9e8iGZHySJqx4hjSvUUI6CWDq-rE2Jc4v8qsnttsZY7p058x1USJotnl/exec';
//     return await fetch(url).then(res => res.json());
//   }

//   title = () => `Veterinários ${ this.props.params.city ? `em ${this.props.params.city}:` : 'perto de você:'}`;

//   async componentDidMount () {
//     this.props.dispatch({ type: 'SET_VET_LIST', value: await this.getVetList() });
//     this.props.dispatch({ type: 'SET_LOADING', value: false });
//   }

//   constructor (props) {
//     props.dispatch({ type: 'SET_LOADING', value: true });
//     super(props);
//   }

//   render() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//       <>
//         <Container>
//             <ContentHeader>
//               <h2>{ this.title() }</h2>
//               <FilterButton onClick={handleOpen}>Filtrar</FilterButton>
//             </ContentHeader>
//             {
//               this.props.states.loading
//               ? false
//               : <VetListContainer>
//                   {
//                     this.props.states.vetList.map(item => (
//                       <Link key={item.veterinaryId} to={`${item.veterinaryId}`} state={{ vetProfileData: item }}>
//                         <VetItem key={item.veterinaryId} name={`${item.name}`} appoitmentValue={`${item.appoitmentValue}`} image={`${item.profileImageUrl}`} about={`${item.about}`} />
//                       </Link>
//                     ))
//                   }
//                 </VetListContainer>
//             }
//         </Container>

//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         ></Modal>
//       </>
//     );
//   }
// }

// export default withRouter(VetList);