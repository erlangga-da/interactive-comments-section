import React, { useState, useEffect } from "react";
import { CommentList } from "../components/CommentList";
import data from "../data.json";

// what's inside :
// store textarea (reply comment) value inside const inputValue using onChange
// controll state of reply button (disabled or not)
// prevent user from sending empty comment
// controll submitting comment (not reply comment)
// loop comment data from const items
// check user's comments and make it unique

export const CommentContainer = () => {
  let png = data.currentUser.image.png;
  png = png.substring(1);
  const [inputValue, setInputValue] = useState("");
  let rawData = JSON.parse(localStorage.getItem("raw"));
  const [items, setItems] = useState(rawData.comments);
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
      let getid = items.length;
      let handleData = {
        id: getid++,
        content: inputValue,
        createdAt: undefined || "Today",
        score: 0,
        user: {
          image: {
            png: `./images/avatars/image-${data.currentUser.username}.png`,
            webp: `./images/avatars/image-${data.currentUser.username}.webp`,
          },
          username: data.currentUser.username,
        },
        replies: [],
      };
      setItems([...items, handleData]);
      setInputValue('');
      document.getElementById('tai').value = '';
    }
  };

  return (
    <div className="listMargin">
      {items.map((v, index) => {
        // check if the comment is the same username
        let IsOwn = false;
        if (v.user.username === data.currentUser.username) {
          IsOwn = true;
        }

        return (
          <>
            <CommentList
              key={index}
              id={v.id}
              user={v.user}
              score={v.score}
              createdAt={v.createdAt}
              content={v.content}
              replies={v.replies}
              IsOwn={IsOwn}
              Items={items}
              setItems={setItems}
            />
          </>
        );
      })}
      {/* Input Comment */}
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
            placeholder={`Leave a comment`}
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
    </div>
  );
};
