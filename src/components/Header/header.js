import React from 'react';

import { Fixed, Container, Navigation } from './styles';
import logo from './../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fixed>
            <Container>
                <Link to="/">
                    <img src={logo} width="120" alt="ClickVet atendimento de veterinário a domicílio" />
                </Link>
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