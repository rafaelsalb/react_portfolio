import { useState } from 'react';


export function ColorModeSwitch(props) {
    let [mode, setMode] = useState("dark");

    function switchColorMode() {
        let page_root = document.querySelector("html");
        page_root.attributes.getNamedItem("data-bs-theme").value = mode === "dark" ? "light" : "dark";
        setMode(page_root.attributes.getNamedItem("data-bs-theme").value);
    }

    return (
        <>
            <button type="button" className="btn" onClick={switchColorMode}>Switch color mode</button>
        </>
    )
}

export default ColorModeSwitch;