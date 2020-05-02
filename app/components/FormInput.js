import React, { useState } from "react";
// import "./FormInput.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
  },
  buttonAlign: {
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function FormInput(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [howToMeet, setHowToMeet] = useState("");
  const [lastContact, setLastContact] = useState("");
  const [doneSubmit, setDone] = useState(false);

  return (
    <div className={classes.root}>
      <Logo></Logo>
      {!doneSubmit ? (
        <div>
          <TextField
            id="standard-full-width"
            label="Name"
            placeholder="Erlich Bachman"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Company"
            placeholder="Piped Piper"
            fullWidth
            margin="normal"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Name"
            placeholder="Investor, ..."
            fullWidth
            margin="normal"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="How did you meet ?"
            placeholder="Incubator XYZ"
            fullWidth
            margin="normal"
            value={howToMeet}
            onChange={(e) => setHowToMeet(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Name"
            type="date"
            defaultValue="2020-04-24"
            fullWidth
            margin="normal"
            value={lastContact}
            onChange={(e) => setLastContact(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className={classes.buttonAlign}>
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                props.handleSubmit({
                  name,
                  company,
                  notes,
                  howToMeet,
                  lastContact,
                });
                setName("");
                setCompany("");
                setNotes("");
                setHowToMeet("");
                setLastContact("");
                setDone(true);
              }}
            >
              Submit
            </Button>

            <Button
              color="primary"
              onClick={() => props.modifyWindow("SHOW_CONNECTIONS")}
            >
              See Lists
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              paddingBottom: "20px",
            }}
          >
            Added Connection Successfully!
          </h1>
          <span
            style={{
              display: "flex",
              flex: "1",
              paddingBottom: "20px",
            }}
          >
            <svg
              width="128"
              height="120"
              viewBox="0 0 128 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90 30C90 46.575 76.575 60 60 60C43.425 60 30 46.575 30 30C30 13.425 43.425 0 60 0C76.575 0 90 13.425 90 30ZM0 105C0 85.05 39.975 75 60 75C80.025 75 120 85.05 120 105V112.5C120 116.625 116.625 120 112.5 120H7.5C3.375 120 0 116.625 0 112.5V105Z"
                fill="black"
              />
              <circle cx="108" cy="80" r="20" fill="#0077B5" />
              <path
                d="M104.483 84.9304L100.134 80.5153C99.8997 80.277 99.5818 80.1432 99.2502 80.1432C98.9187 80.1432 98.6008 80.277 98.3666 80.5153C97.8778 81.0115 97.8778 81.8131 98.3666 82.3093L103.606 87.6278C104.094 88.1241 104.884 88.1241 105.373 87.6278L118.633 74.1662C119.122 73.67 119.122 72.8684 118.633 72.3721C118.399 72.1339 118.081 72 117.75 72C117.418 72 117.1 72.1339 116.866 72.3721L104.483 84.9304Z"
                fill="black"
              />
            </svg>
          </span>
          <Button
            color="primary"
            onClick={() => props.modifyWindow("SHOW_CONNECTIONS")}
          >
            See Lists
          </Button>
        </div>
      )}
    </div>
  );
}
