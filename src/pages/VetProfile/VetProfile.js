import { Avatar, Breadcrumbs, Chip } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router';

import { Background, Container, ProfileHeader } from './styles';
import{ capitalizeFirstLetter } from '../../helpers/General';

function withRouter (Component) {
  return props => <Component {...props} params={useParams()} location={useLocation()} />;
}
class VetProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const data = this.props.location.state.vetProfileData;
    const specialties = data[5].split(', ');

    return (
      <>
      <Background>
        <Container>
          <Breadcrumbs>
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
          </Breadcrumbs>
          <ProfileHeader>
            <Avatar alt={data[1]} src={data[3]} sx={{ width: 240, height: 240 }}/>
            <div className='info'>
              <h3>{data[1]}</h3>
              {specialties.map(specialty => (
                <Chip label={specialty} />
              ))}
            </div>
          </ProfileHeader>
        </Container>
      </Background>
    </>
    );
  }
}

export default withRouter(VetProfile);
