import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function ComposeEmail(props) {
  const { title, content } = props.curMessage;
  const [curTitle, setTitle] = useState(title || "Cold Email Template ... ");
  const [curContent, setContent] = useState(content || "Dear [Recruiter], ...");
  return (
    <div>
      <section className="messageTitle">
        <div style={{ display: "inline" }}>
          <span
            style={{ marginRight: "5px" }}
            onClick={(e) => {
              e.preventDefault();
              props.modifyWindow("SHOW_MESSAGES");
            }}
          >
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z"
                fill="black"
              />
            </svg>
          </span>
          <span style={{ fontWeight: "bold", fontSize: "30px" }}>
            Add New Email Template
          </span>
        </div>
      </section>
      <section id="newMessage">
        <form>
          <TextField
            name="email"
            label="Template title"
            placeholder="Cold Email XYZ..."
            value={curTitle}
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            style={{
              marginTop: "10px",
              minHeight: "300px",
              width: "100%",
              background: "#E1E9EE",
              flex: "1",
              fontSize: 18,
            }}
            placeholder="Dear [Hiring Manager] ..."
            name="email"
            fullWidth
            value={curContent}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
      </section>

      <section id="textFormat">
        <span src="#" alt="Emoji" style={{ marginRight: "5px" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM15 7.5C15 8.33 14.33 9 13.5 9C12.67 9 12 8.33 12 7.5C12 6.67 12.67 6 13.5 6C14.33 6 15 6.67 15 7.5ZM6.5 9C7.33 9 8 8.33 8 7.5C8 6.67 7.33 6 6.5 6C5.67 6 5 6.67 5 7.5C5 8.33 5.67 9 6.5 9ZM14.75 12.75C13.8 14.39 12.03 15.5 10 15.5C7.97 15.5 6.2 14.39 5.25 12.75C5.06 12.42 5.31 12 5.69 12H14.31C14.7 12 14.94 12.42 14.75 12.75Z"
              fill="black"
            />
          </svg>
        </span>
        <span src="#" alt="Link">
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 8H8C8.55 8 9 8.45 9 9C9 9.55 8.55 10 8 10H5C2.24 10 0 7.76 0 5C0 2.24 2.24 0 5 0H8C8.55 0 9 0.45 9 1C9 1.55 8.55 2 8 2H5C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8ZM15 0H12C11.45 0 11 0.45 11 1C11 1.55 11.45 2 12 2H15C16.65 2 18 3.35 18 5C18 6.65 16.65 8 15 8H12C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM6 5C6 5.55 6.45 6 7 6H13C13.55 6 14 5.55 14 5C14 4.45 13.55 4 13 4H7C6.45 4 6 4.45 6 5Z"
              fill="black"
            />
          </svg>
        </span>
      </section>
      <button
        id="saveMessage"
        onClick={(e) => {
          e.preventDefault();
          props.addEmail({
            title: curTitle,
            content: curContent,
            reminder: curReminder,
          });
          props.modifyWindow("SHOW_MESSAGES");
        }}
      >
        <a href="#">Save</a>
      </button>
    </div>
  );
}
