import React from 'react';
import { Item, Divider } from './styles';

const ListItem = (props) => {
    return (
        <>
            <Item>
                <div className="icon">
                    <props.icon />
                </div>
                <div className="content">
                    { props.title
                        ? <span className="title">{props.title}</span>
                        : false }
                    { props.subtitle
                        ? <span className="subtitle">{props.subtitle}</span>
                        : false }
                </div>
                { props.type == 'address'
                    ? <a href={`https://www.google.com.br/maps/search/${props.address.street}${props.address.number}`} title='Ver no mapa'>Ver no mapa</a>
                    : false }
            </Item>
            <Divider />
        </>
    );
}

export default ListItem;