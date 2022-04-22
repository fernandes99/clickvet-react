import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';

import { Item, Card, CardContent } from './styles';

const VetItem = (props) => {
    if (!props) return;

    const formatedValue = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL', }).format((props.appoitmentValue / 100).toFixed(2));

    return (
        <Item onClick={props.onClick}>
            <Card>
                <CardContent>
                    <Avatar alt={props.name} src={props.image} sx={{ width: 70, height: 70 }}/>
                    <div className='info'>
                        <strong>{props.name}</strong>
                        <p>{formatedValue}</p>
                        <div>
                            <span>{props.about}</span>
                        </div>
                    </div>
                    <FiChevronRight className='icon' size={32} />
                </CardContent>
            </Card>
        </Item>
    );
}

export default VetItem;