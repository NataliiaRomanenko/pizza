import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
    console.log(props);
    const {children, className, outline} = props;
    return (
        <button className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    )
}
export default Button;