import React, { useState } from "react";

export default function EmailForm(props) {
  const [email, setEmail] = useState("");
  return (
    <div className="form">
      <form>
        <input
          name="email"
          placeholder="Dear [Recruiter], ... "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.handleSubmit({ email });
            setEmail("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
