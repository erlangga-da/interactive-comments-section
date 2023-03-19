import React, { useState } from "react";
import { Reply } from "./Reply";
import { ReplyComment } from "./ReplyComment";

// parent 

//the key is in the param.replies
export const CommentList = (param) => {
  let png = param.user.image.png;
  png = png.substring(1);
  const [bool, setBool] = useState(false);
  const [items, setItems] = useState(param.replies);
  const setReply = (value) => {
    setItems([...items, value]);
    setBool(false);
  }
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
          <p>{param.score}</p>
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
              <p className="name">{param.user.username}</p>
              <p className="date-post">{param.createdAt}</p>
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
            <p>{param.content}</p>
          </div>
        </div>
      </div>
      {/* Input Form Reply */}
      <ReplyComment bool={bool} data={param} setReply={setReply} replies={param.replies} />
      {/* balesan komen org */}
      <div className="replies-container">
        <div className="outline">
          {items.map((v, index) => {
            return (
              <Reply
                key={index}
                user={v.user}
                score={v.score}
                replyingTo={v.replyingTo}
                createdAt={v.createdAt}
                content={v.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
