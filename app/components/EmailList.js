import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import EmailItem from "./EmailItem.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: "black",
  },
}));

export default function EmailList(props) {
  const classes = useStyles();

  const renderConnection = (messages) => {
    return messages.map((message) => (
      <EmailItem
        chooseCurrentMessage={props.chooseCurrentMessage}
        key={message}
        message={message}
      ></EmailItem>
    ));
  };
  return (
    <div className={classes.root}>
      <div style={{ display: "inline" }}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Email Template
        </h1>
        <span
          onClick={() => props.modifyWindow("ADD_CONNECTION")}
          style={{ marginBottom: "20px" }}
        >
          <u>add connection</u>
        </span>
        <button onClick={() => props.modifyWindow("ADD_MESSAGE")}>
          Add New
        </button>
      </div>
      <List component="nav" aria-label="main mailbox folders">
        {props.messages && props.messages.length > 0 ? (
          renderConnection(props.messages)
        ) : (
          <h3>Wow... Such empty</h3>
        )}
      </List>
    </div>
  );
}
