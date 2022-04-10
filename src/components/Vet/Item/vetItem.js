import React from 'react';

import { Item, Card } from './styles';

const VetItem = (props) => {
    return (
        <Item>
            <Card>
                <img srcSet={props.image} width={64} height={64} />
                <div className='info'>
                    <strong>{props.name}</strong>
                    <p>{props.appoitmentValue}</p>
                </div>
                <i>⮞</i>
            </Card>
        </Item>
    );
}

export default VetItem;