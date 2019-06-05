import React from 'react';
import MainMenuCategory from './MainMenuCategory';

function MainMenu(){

    return(
        <div className='main-menu'>
            <MainMenuCategory 
                img={'red'}
                text={'STREET/VERT'} />
            <MainMenuCategory 
                img={'../img/freestyle1.1.jpg'}
                text={'FREESTYLE'} />
            <MainMenuCategory 
                img={'../img/helmets1.1.jpg'}
                text={'ACCESSORIES'} />
    
        </div>
    )
}

export default MainMenu;