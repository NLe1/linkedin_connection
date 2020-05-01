import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
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
    </ListItem>
  );
}
