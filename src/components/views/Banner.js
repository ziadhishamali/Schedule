import React from 'react';

const Banner = ({title, className}) => {
    return (
        <div className={"flex-row justify align banner box-shadow white-text small berlin " + className}>
            {title}
        </div>
    )
}

export default Banner;