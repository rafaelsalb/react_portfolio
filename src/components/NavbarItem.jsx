export function NavbarItem(props) {
    return (
        <>
            <li className="nav-item">
                <button type="button" className={"nav-link" + (props.active ? " active" : "")} aria-current="page" onClick={() => props.function(props.linkTo)}>{props.text}</button>
            </li>
        </>
    );
}

export default NavbarItem;