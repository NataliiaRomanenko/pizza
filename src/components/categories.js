import React from 'react';

const Categories = (props) => {

    const {items} = props;

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };
    return (
        <ul>
            <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
                Все
            </li>
            {items &&
            items.map((item, i) => (
                <li
                    className={activeItem === i ? 'active' : ''}
                    onClick={() => onSelectItem(i)}
                    key={`${item}_${i}`}>
                    {item}
                </li>
            ))}


        </ul>
    )
}
export default Categories;