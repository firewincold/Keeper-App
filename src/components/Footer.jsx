import React from "react";

function Footer(){
    const d = new Date();
    const n = d.getFullYear();

    return(<footer>
    <p>Copyright  Shenghan Huo &#169; {n}</p>
    </footer>);
}

export default Footer;