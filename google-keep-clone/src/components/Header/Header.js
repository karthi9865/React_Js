import React from "react";
import "./Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

export const Header = () => {
  return (
    <div>
      <header>
        <h1>
          <HighlightIcon />
          Keep
        </h1>
      </header>
    </div>
  );
};

export default Header;
