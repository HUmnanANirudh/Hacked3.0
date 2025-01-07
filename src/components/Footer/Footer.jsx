import React from "react";

function Footer() {
  var currentYear= (new Date()).getFullYear();  
  return (
    <footer >
      <p className="text-white text-center p-5">© {currentYear} Hacked 3.0. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
