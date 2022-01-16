import React from 'react'

export const GifGridItem = ( { title, url } ) => {

    return (
        <div className='card'>
            {/* <h3> { img.title } </h3> */}
            <img src={ url } alt={ title } />
            <p> { title } </p>

        </div>
    )
}
