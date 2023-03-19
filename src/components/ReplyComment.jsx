import React, { useState, useEffect } from "react";
import data from "../data.json";

/* reply comment */

export const ReplyComment = (v) => {
  let png = data.currentUser.image.png;
  png = png.substring(1);
  const [inputValue, setInputValue] = useState("");
  const [disabled, setdisabled] = useState(true);
  useEffect(() => {
    if (inputValue !== "") {
      if (!inputValue.replace(/\s/g, "").length) {
        setdisabled(true);
      } else {
        setdisabled(false);
      }
    } else {
      setdisabled(true);
    }
  }, [inputValue]);
  const handleSubmit = () => {
    if (inputValue !== "") {
      let getid = data.comments.length;
      let contentVal = " " + inputValue;
      let handleData = {
        id: getid++,
        content: contentVal,
        createdAt: undefined || "Today",
        replyingTo: v.data.user.username,
        score: 0,
        user: {
          image: {
            png: `./images/avatars/image-${data.currentUser.username}.png`,
            webp: `./images/avatars/image-${data.currentUser.username}.webp`,
          },
          username: data.currentUser.username,
        },
      };
      document.getElementById("tai").value = "";
      v.setReply(handleData);
      setInputValue("");
    }
  };
  if (v.bool === true) {
    return (
      <>
        <div className="reply-container">
          <div className="Input-reply">
            <div className="profile">
              <img src={`http://localhost:3000/brief${png}`} alt="profile" />
            </div>
            <textarea
              name="reply-content"
              id="tai"
              rows="10"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Reply to @${v.data.user.username} `}
            ></textarea>
            <button
              disabled={disabled}
              className="user-reply-btn"
              onClick={() => handleSubmit()}
              type="button"
            >
              Reply
            </button>
          </div>
        </div>
      </>
    );
  }
};
