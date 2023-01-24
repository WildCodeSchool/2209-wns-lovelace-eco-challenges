import { useState } from 'react';
import burger from './burger.png';

import Nav from '../../Shared/Nav/Nav';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <h1 className="title">Eco Playground</h1>
            <div onClick={ () => setOpen(!open) } className="burger-container">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <Nav open={ open } />
        </header>
    )
}

export default Header;