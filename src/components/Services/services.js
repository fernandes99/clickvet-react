import React from 'react';;

import { Container } from './styles';

const Services = () => {
    return (
        <Container>
            <div className="content">
                <i>🧐</i>
                <h3>Consultas</h3>
                <p>Nossa equipe de veterinários é formada por profissionais de quase todas as especialidades que levam saúde e qualidade de vida para você e seus pets.</p>
            </div>
            <div className="content">
                <i>🐶</i>
                <h3>Exames</h3>
                <p>É isso mesmo! Você pode agendar e realizar diversos tipos de exames sem sair da sua casa! Nossa equipe conta com profissionais especializados em diversas áreas.</p>
            </div>
            <div className="content">
                <i>💉</i>
                <h3>Vacinas</h3>
                <p>De forma segura e prática, sem filas nem stress, que pode ser causado em ambientes estranhos, você pode vacinar o seu pet no conforto do seu sofá!</p>
            </div>
        </Container>
    );
}

export default Services;