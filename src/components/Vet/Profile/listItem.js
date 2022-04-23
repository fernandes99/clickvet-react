import React, { useEffect } from 'react';
import { Item } from './styles';

const ListItem = (props) => {
        // let { icon }  = props;
    return (
        <Item>
            <div className="list-icon">
                {/* {icon} */}
            </div>
            <div className="list-content">
                <span className="list-title">{props.title}</span>
                <span className="list-subtitle">{props.subtitle}</span>
            </div>
        </Item>
    );
}

export default ListItem;