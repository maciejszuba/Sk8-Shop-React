import React from 'react';

function MainMenuCategry({img, text}){

    console.log(img);

    return (
        <div className='main-menu-category' style ={{backgroundColor: {img}}}>
            
            <p>{text}</p>
    
        </div>
    )

}

export default MainMenuCategry;