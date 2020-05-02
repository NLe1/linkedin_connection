import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";
import { TextField, IconButton, Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

export default function ComposeEmail(props) {
  const { id, title, content } = props.curMessage;
  const [curTitle, setTitle] = useState(title || "");
  const [curContent, setContent] = useState(content || "");
  const [open, setOpen] = useState(false);
  const [el, setEl] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ padding: "5px" }}>
      <IconButton
        size="small"
        aria-label="back"
        onClick={(e) => {
          e.preventDefault();
          props.modifyWindow("SHOW_MESSAGES");
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <TextField
        style={{ marginTop: "20px" }}
        name="email"
        label="Template title"
        placeholder="Cold Email XYZ..."
        value={curTitle}
        fullWidth
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={{
          marginTop: "10px",
          minHeight: "300px",
          width: "100%",
          background: "#E1E9EE",
          flex: "1",
          fontSize: 18,
        }}
        ref={(textarea) => setEl(textarea)}
        placeholder="Dear [Hiring Manager] ..."
        name="email"
        fullWidth
        value={curContent}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <section style={{ display: "inline" }} id="textFormat">
        <IconButton
          size="small"
          aria-label="back"
          onClick={() => {
            el.select();
            document.execCommand("copy");
            setOpen(true);
          }}
        >
          <SaveIcon />
        </IconButton>

        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            if (id !== undefined) {
              props.deleteEmail(id);
            }
            props.addEmail({
              id: uuidv4(),
              title: curTitle,
              content: curContent,
            });
            props.chooseCurrentMessage();
            props.modifyWindow("SHOW_MESSAGES");
          }}
        >
          Save
        </Button>
      </section>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to Clipboard"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
