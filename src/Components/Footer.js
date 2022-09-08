import React from 'react';
import github from "../Assets/github.svg";

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer_info">
                        <span className="footer_copy">© 2022 FFREAK., All Rights Reserved</span>
                    </div>
                    <div className="footer_icons">
                        <a href="https://github.com/FFreakPL"><img src={github} alt="github"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
}