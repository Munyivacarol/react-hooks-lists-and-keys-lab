import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
           {/* Map over the array of links and create an <a> tag for each */}
           {links.map((link, index) => (
           <a key={index} href={`#${link}`}>{link}</a>
      ))}
         </nav>;
}

export default NavBar;
