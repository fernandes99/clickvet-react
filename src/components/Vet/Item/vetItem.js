import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
                <FiChevronRight className='icon' size={32} />
            </Card>
        </Item>
    );
}

export default VetItem;