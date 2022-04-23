import { Avatar, Breadcrumbs, Chip, List, ListItem, ListItemAvatar } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { Background, Container, Box, Tags, Rating, ProfileContent } from './styles';

function withRouter (Component) {
  return props => <Component {...props} params={useParams()} location={useLocation()} />;
}
class VetProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const data = this.props.location.state.vetProfileData;
    const specialties = data.specialties.split(', ');
    const formatedValue = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format((data.appoitmentValue / 100).toFixed(2));

    return (
      <>
      <Background>
        <Container>
          <Breadcrumbs className='breadcrumb' separator={<ChevronRightRoundedIcon fontSize='' />}>
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
          </Breadcrumbs>
          <Box>
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
                  <div className='price'>
                    <span className='info-title'>Valor da consulta:</span>
                    <span>{formatedValue}</span>
                  </div>
                </div>
              </ProfileContent>
          </Box>
        </Container>

        <Container>
          <Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <span>TESTE</span>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Background>
    </>
    );
  }
}

export default withRouter(VetProfile);
