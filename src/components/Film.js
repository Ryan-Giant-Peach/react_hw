import React from 'react';

const Film = ({name, url, children}) => {

    return(
        <>
            <h4>{children}</h4>
            <p><a href={url}>{name}</a></p>
            
        </>
    )
}

export default Film;