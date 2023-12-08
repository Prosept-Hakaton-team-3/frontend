import "./Footer.css";
import React from "react";

export function Footer () {
  return (
        <footer className="footer">
            <p>© {new Date().getFullYear()}</p>
        </footer>
  );
}
