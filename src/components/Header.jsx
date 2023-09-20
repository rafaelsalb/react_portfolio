import { React } from 'react';


function CustomHeader(props) {
    return (
        <>
            <h1>
                {props.text}
            </h1>
        </>
    );
}

export default CustomHeader;
