import React, { PropTypes, useState } from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mutual, setMutual] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="form">
      <form>
        <input
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <input
          name="company"
          defaultValue={company}
          placeholder="Apple Inc."
          onChange={(e) => setCompany(e.target.value)}
        />
        <hr />
        <input
          name="mutual"
          value={mutual}
          placeholder="Marry Doe, Adam Lambert, ..."
          onChange={(e) => setMutual(e.target.value)}
        />
        <hr />

        <input
          name="notes"
          value={notes}
          placeholder="LinkedIn Cold Email, Resume Review ..."
          onChange={(e) => setNotes(e.target.value)}
        />
        <hr />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.handleSubmit({ name, company, mutual, notes });
            setName("");
            setMutual("");
            setCompany("");
            setNotes("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
