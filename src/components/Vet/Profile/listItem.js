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
            </Item>
            <Divider />
        </>
    );
}

export default ListItem;