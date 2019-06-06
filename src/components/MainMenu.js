import React from 'react';
import MainMenuCategory from './MainMenuCategory';
import vertImg from '../img/vert-color.jpg';
import fsImg from '../img/freestyle-color.jpg';
import accImg from '../img/helmets-color.jpg';
import shoeImg from '../img/shoes-color.jpg';

function MainMenu(){

    return(
        <div className='main-menu'>
           
            <MainMenuCategory 
                img={vertImg}
                text={'STREET/VERT'} />
            <MainMenuCategory 
                img={fsImg}
                text={'FREESTYLE'} />
            <MainMenuCategory 
                img={accImg}
                text={'ACCESSORIES'} />
            <MainMenuCategory 
                img={shoeImg}
                text={'FOOTWEAR'} />
    
        </div>
    )
}

export default MainMenu;