import React from 'react';

function Navbar() {
    return(
        <nav>
            <ul className='navbar'>
                <li><a href={'index.html'}>HOME</a></li>
                <li><a href={'/'}>SHOP</a></li>
                <li><a href={'/'}>CONTACT</a></li>
                <li><a href={'/'}>CART</a></li>       
            </ul>
        </nav>
    )
}

export default Navbar;