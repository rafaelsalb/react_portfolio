import { useEffect, useState } from 'react';


export function ColorModeSwitch() {
    let prevMode = String(window.localStorage.getItem('colorMode'));
    let [mode, setMode] = useState(prevMode !== "undefined" && prevMode !== "null" ? prevMode : "dark");

    useEffect(() => {
        window.localStorage.setItem('colorMode', mode);
        let page_root = document.querySelector("html");
        page_root.attributes.getNamedItem("data-bs-theme").value = mode === "dark" ? "dark" : "light";
    }, [mode]);

    function switchColorMode() {
        setMode(mode === "dark" ? "light" : "dark");
    }

    return (
        <>
            <button type="button" className="btn" onClick={switchColorMode}>Switch color mode</button>
        </>
    )
}

export default ColorModeSwitch;