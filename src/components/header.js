import React from 'react';

const Header = (title, content, disclaimer) => {
    return(
        <div className='header'>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{disclaimer}</p>
        </div>
    )
}

export default Header;