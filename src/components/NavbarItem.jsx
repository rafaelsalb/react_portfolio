import { Link } from 'react-router-dom';


export function NavbarItem(props) {
    const LinkStyle = {
        textDecoration: 'none'
    }

    return (
        <>
            <li className="nav-item">
                <Link to={props.linkTo} className="link" style={LinkStyle}>
                    <button type="button" className={"nav-link" + (props.active ? " active" : "")} aria-current="page" onClick={() => props.function(props.linkTo)}>{props.text}</button>
                </Link>
            </li>
        </>
    );
}

export default NavbarItem;