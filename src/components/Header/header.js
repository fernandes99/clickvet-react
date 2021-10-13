import React from 'react';

import { Fixed, Container, Navigation } from './styles';
import logoImage from '../../assets/img/logo.svg';

const Header = () => {
    return (
        <Fixed>
            <Container>
                <img src={logoImage} width="120" alt="ClickVet atendimento de veterinário a domicílio" />
                <Navigation>
                    <ul>
                        <li>
                            <a href="#" title="...">Como funciona?</a>
                        </li>
                        <li>
                            <button>Agendar Consulta</button>
                        </li>
                    </ul>
                </Navigation>
            </Container>
        </Fixed>
    );
}

export default Header;