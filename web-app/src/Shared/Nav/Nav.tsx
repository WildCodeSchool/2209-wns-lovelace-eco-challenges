const Nav = (props: any) => {
    const { open } = props;

    if (!open) {
        return null;
    }

    return(
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>Challenges</li>
                <li>Profil</li>
                <li>Groupes</li>
            </ul>
        </nav>
    );
};

export default Nav;