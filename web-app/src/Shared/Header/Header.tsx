import burger from './burger.png';

const Header = () => {

    return (
        <header className="header">
            <h1 className="title">Eco Playground</h1>
            <div className="img-container">
                <img className="burger" src={burger} alt="menu" />
            </div>
        </header>
    )
}

export default Header;