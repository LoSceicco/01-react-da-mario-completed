import logo from '../assets/Fork_knife.svg';

const Header = (props) => (
        <header>
            <img src={logo} alt="logo" className="logo"></img>
            Ristorante Da Mario
            
            {props.switchModeComponent}
        </header>
    )

export default Header;