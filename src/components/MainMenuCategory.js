import React from 'react';

function MainMenuCategry({img, text}){

    
    const handleOnMouseEnter = (e) => {
        e.preventDefault();
        e.currentTarget.style.webkitFilter = 'grayscale(0%)';
        e.currentTarget.querySelector('a').style.maxHeight = '5rem';
      }

    const handleOnMouseLeave = (e) => {
        e.preventDefault();
        e.currentTarget.style.webkitFilter = 'grayscale(100%)';
        e.currentTarget.querySelector('a').style.maxHeight = '0';
    }

    return (
        <div className='main-menu-category' 
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            style ={{backgroundImage: `url(${img})`}}>
            
            <a href={'/'}>{text}</a>
    
        </div>
    )

}

export default MainMenuCategry;