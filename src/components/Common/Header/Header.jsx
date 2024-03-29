import React from "react";

//components
import NavMain from "./NavMain";

const Header = () => {
    return (
        <header className="headerCont">
            <div className="name">
                <h1>Scott Fuston</h1>
            </div>
            <hr />
            <div className="slogan">
                <h3>Web & Mobile Automation Engineer</h3>
            </div>
            <NavMain />
        </header>
    );
};

export default Header;
