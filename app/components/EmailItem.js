import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "./EmailItem.css";

export default function EmailItem(props) {
  return (
    <ListItem
      button
      id="messageItem"
      onClick={(e) => {
        e.preventDefault();
        props.chooseCurrentMessage(props.message);
      }}
    >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={props.message.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={() => props.deleteEmail(props.message.id)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
