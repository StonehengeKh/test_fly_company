import React from "react"

import "./header.css"
import HeaderLogo from "../../assets/plane.png"

const Header = () => (
    <header className="block-header">
        <img src={HeaderLogo} alt="HeaderLogo" className="header-logo" />
    </header>
)

export default Header