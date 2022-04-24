import React from 'react';;

import { Container } from './styles';

const Services = () => {
    return (
        <Container>
            <div className="content">
                <i>🧐</i>
                <h3>Pesquise veterinários da sua região</h3>
                <p>Escolha o endereço que gostaria de agendar a consulta do seu pet.</p>
            </div>
            <div className="content">
                <i>✅</i>
                <h3>Escolha o veterinário ideal</h3>
                <p>Confira os veterinários disponíveis na sua região, com base no preço, avaliações e especialidade (clínica geral, fisioterapia…)</p>
            </div>
            <div className="content">
                <i>⚡</i>
                <h3>Envie uma mensagem para o veterinário</h3>
                <p>Conecte-se com o veterinário e combine uma data e horário para sua consulta!</p>
            </div>
        </Container>
    );
}

export default Services;