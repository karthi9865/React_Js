import React from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/material-ui/icon/Add";

const CreateNote = () => {
  return (
    <div>
      <from className="create-note">
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." />
      </from>
      <Zoom>
        <Fab>
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
};

export default CreateNote;
