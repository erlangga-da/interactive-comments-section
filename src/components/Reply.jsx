import React, { useState } from "react";
import { ReplyComment } from "./ReplyComment";

export const Reply = (v) => {
  const [bool, setBool] = useState(false);
  let png = v.user.image.png;
  png = png.substring(1);
  const InputReplySec = (value) => {
    return <ReplyComment username={value} bool={bool} />;
  };
  return (
    <>
      <div className="container">
        <div className="liked">
          <button type="button">
            <img
              src="http://localhost:3000/brief/images/icon-plus.svg"
              alt="plus"
            />
          </button>
          <p>{v.score}</p>
          <button type="button">
            <img
              src="http://localhost:3000/brief/images/icon-minus.svg"
              alt="minus"
            />
          </button>
        </div>
        <div className="content">
          <div className="account">
            <div className="profile">
              <img src={`http://localhost:3000/brief${png}`} alt="profile" />
              <p className="name">{v.user.username}</p>
              <p className="date-post">{v.createdAt}</p>
            </div>
            <button
              className="reply-btn"
              onClick={() => setBool(true)}
              type="button"
            >
              <img
                className="reply-icon"
                src={`http://localhost:3000/brief/images/icon-reply.svg`}
                alt="profile"
              />
              Reply
            </button>
          </div>
          <div className="comment">
            <p><label>{"@" + v.replyingTo + " "}</label>{v.content}</p>
          </div>
        </div>
      </div>
      {InputReplySec(v.user.username)}
    </>
  );
};
