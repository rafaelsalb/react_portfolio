import { Link } from 'react-router-dom';

export function NavbarBrand(props) {
    const LinkStyle = {
        textDecoration: 'none'
    }

    return (
        <>
            <li className="navbar-brand">
                <Link to={props.linkTo} className="link" style={LinkStyle}>
                    {props.text}
                </Link>
            </li>
        </>
    );
}

export default NavbarBrand;