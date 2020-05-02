import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import EmailItem from "./EmailItem.js";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: "black",
  },
  buttonGroup: {
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function EmailList(props) {
  const classes = useStyles();
  const renderConnection = (messages) => {
    return messages.map((message) => (
      <EmailItem
        chooseCurrentMessage={props.chooseCurrentMessage}
        key={message}
        deleteEmail={props.deleteEmail}
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
        <div className={classes.buttonGroup}>
          <Button
            size="small"
            variant="contained"
            onClick={() => props.modifyWindow("ADD_CONNECTION")}
          >
            ADD CONNECTION
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => props.modifyWindow("ADD_MESSAGE")}
            color="primary"
          >
            ADD TEMPLATE
          </Button>
        </div>
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
