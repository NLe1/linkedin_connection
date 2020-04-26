import React, { PropTypes, useState } from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [howToMeet, setHowToMeet] = useState("");
  const [lastContact, setLastContact] = useState("");

  return (
    <div className="form">
      <form>
        <input
          id="name"
          name="name"
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          id="company"
          name="company"
          defaultValue={company}
          placeholder="Apple Inc."
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          id="howtoMeet"
          name="howToMeet"
          value={howToMeet}
          placeholder="Linkedin Reachout, Resume Review,..."
          onChange={(e) => setHowToMeet(e.target.value)}
        />
        <input
          id="lastContact"
          type="date"
          name="lastContact"
          placeholder={new Date().toISOString().split("T")[0]}
          onChange={(e) => setLastContact(e.target.value)}
        />

        <input
          id="notes"
          name="notes"
          value={notes}
          placeholder="SJSU Alumni, Passionate in helping people"
          onChange={(e) => setNotes(e.target.value)}
        />

        <button
          className="button"
          id="submit"
          type="submit"
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
          }}
        >
          Submit
        </button>
        <u>
          <a onClick={() => props.modifyWindow("SHOW_CONNECTIONS")}>
            See Lists
          </a>
        </u>
      </form>
    </div>
  );
}
