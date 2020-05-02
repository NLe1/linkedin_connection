import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { v4 as uuidv4 } from "uuid";

const initialUser = {
  name: "",
  company: "",
  notes: "",
  howToMeet: "",
  lastContact: "",
  id: uuidv4(),
  subRows: undefined,
};

const AddUserDialog = (props) => {
  const [user, setUser] = useState(initialUser);
  const { addUserHandler } = props;
  const [open, setOpen] = React.useState(false);

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  });

  const handleSwitchChange = (name) => (event) => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
  };

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSwitch();
  };

  const handleAdd = (event) => {
    addUserHandler(user);
    setUser(initialUser);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange = (name) => ({ target: { value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Tooltip title="Add">
        <IconButton size="small" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Connection</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={user.name}
            onChange={handleChange("name")}
          />
          <TextField
            margin="dense"
            label="Company"
            type="text"
            fullWidth
            value={user.company}
            onChange={handleChange("company")}
          />
          <TextField
            margin="dense"
            label="Notes"
            type="text"
            fullWidth
            value={user.notes}
            onChange={handleChange("notes")}
          />
          <TextField
            margin="dense"
            label="How did you meet?"
            type="text"
            fullWidth
            value={user.howToMeet}
            onChange={handleChange("howToMeet")}
          />
          <TextField
            margin="dense"
            label=""
            type="date"
            fullWidth
            onChange={handleChange("lastContact")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" size="small">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" size="small">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default AddUserDialog;
