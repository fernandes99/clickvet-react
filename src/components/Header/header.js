import React from 'react';

import { Container, Navigation } from './styles';

const Header = () => {
    return (
        <Container>
            <img src={'./src/assets/img/logo.svg'} width="120" alt="ClickVet atendimento de veterinário a domicílio" />
            <Navigation>
                <ul>
                    <li>
                        <a href="#" title="...">Action</a>
                    </li>
                </ul>
            </Navigation>
        </Container>
    );
}

export default Header;