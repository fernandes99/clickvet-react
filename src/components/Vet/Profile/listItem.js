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
                    <span className="title">{props.title}</span>
                    <span className="subtitle">{props.subtitle}</span>
                </div>
            </Item>
            <Divider />
        </>
    );
}

export default ListItem;