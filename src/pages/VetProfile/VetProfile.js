import { Avatar, Breadcrumbs } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

import { Background, Container, Box, Tags, Rating, ProfileContent, ListContent } from './styles';
import ListItem from '../../components/Vet/Profile/listItem';

function withRouter (Component) {
  return props => <Component {...props} params={useParams()} location={useLocation()} />;
}
class VetProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const icons = {
      location: () => (<FmdGoodOutlinedIcon />),
      money: () => (<PaymentRoundedIcon />),
      pet: () => (<PetsRoundedIcon />),
      web: () => (<LanguageRoundedIcon />),
      phone: () => (<PhoneRoundedIcon />)
    }

    const data = this.props.location.state.vetProfileData;
    const specialties = data.specialties.split(', ');
    const formatedValue = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format((data.appoitmentValue / 100).toFixed(2));

    const sendMessage = (message) => {
      const url = `https://api.whatsapp.com/send?phone=55${data.phone}&text=${message}`;
      window.open(url, '_blank');
    }

    return (
      <>
      <Background>
        <Container className='profile-container'>
          <Box className='profile-box'>
            <ProfileContent>
              <Avatar alt={data.name} src={data.profileImageUrl} sx={{ width: 120, height: 120 }}/>
              <div className='info'>
                <h3>{data.name}</h3>
                <Rating>
                  <StarRateRoundedIcon className='star' fontSize='medium'/>
                  <span className='rate'>4,9</span>
                  <span className='votes'>(52)</span>
                  <span className='action'>Ver avaliações <ChevronRightRoundedIcon className='chrevron' fontSize='large' /></span>
                </Rating>
                <Tags>
                  {specialties.map((specialty, intex) => (
                    <span key={intex}>{specialty}</span>
                  ))}
                </Tags>
                <div className='about'>
                  <span>{data.about}</span>
                </div>
                <div className='content'>
                  <div className='price'>
                    <span className='info-title'>Valor da consulta:</span>
                    <span>{formatedValue}</span>
                  </div>
                  <button onClick={() => sendMessage('Olá, vi seu perfil no Clickvet, gostaria de agendar uma consulta para o meu pet!')}>Enviar mensagem</button>
                </div>
              </div>
            </ProfileContent>
          </Box>
        </Container>

        <Container>
          <Box>
            <ListContent>
              <span className='list-title'>Mais informações:</span>
              <ul>
                <ListItem
                  title={`${data.clinicAddress[0].street}, ${data.clinicAddress[0].number}, ${data.clinicAddress[0].neighborhood}, ${data.clinicAddress[0].complement}`}
                  subtitle={`${data.clinicAddress[0].city}, ${data.clinicAddress[0].state}`}
                  icon={icons.location}
                />
                <ListItem
                  title={`Faz consultas ${data.meetsSpecies.length == 1 ? 'apenas em' : 'em'} ${data.meetsSpecies}`}
                  icon={icons.pet}
                />
                <ListItem
                  type={'phone'}
                  title={data.phone}
                  icon={icons.phone}
                />
                <ListItem
                  title={data.website}
                  icon={icons.web}
                />
              </ul>
            </ListContent>
          </Box>
        </Container>
      </Background>
    </>
    );
  }
}

export default withRouter(VetProfile);
