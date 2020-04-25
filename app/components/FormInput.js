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
          className="input"
          name="name"
          defaultValue={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <input
          className="input"
          name="company"
          defaultValue={company}
          placeholder="Apple Inc."
          onChange={(e) => setCompany(e.target.value)}
        />
        <hr />
        <input
          className="input"
          name="mutual"
          defaultValue={mutual}
          placeholder="Marry Doe, Adam Lambert, ..."
          onChange={(e) => setMutual(e.target.value)}
        />
        <hr />

        <input
          className="input"
          name="notes"
          defaultValue={notes}
          placeholder="LinkedIn Cold Email, Resume Review ..."
          onChange={(e) => setNotes(e.target.value)}
        />
        <hr />

        <button
          type="submit"
          onClick={() => props.handleSubmit({ name, company, mutual, notes })}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
