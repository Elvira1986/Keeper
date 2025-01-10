import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Header = () => {
  return (
    <header>
      <h1>
        <span>
          <EditNoteIcon fontSize="large" className="noteIcon" />
        </span>
        Keeper
      </h1>
    </header>
  );
};

export default Header;
