import React, { FC } from "react";
import styles from "./comments.module.scss";

interface CommentsProps {
  name: string;
  body: string;
  email: string;
}

const Comments: FC<CommentsProps> = ({ name, body, email }) => {
  return (
    <div className={`${styles.comments}`}>
      <h3 className={`${styles.title}`}>{name}</h3>
      <p className={`${styles.content}`}>{body}</p>
      <p className={`${styles.author}`}>Author: {email}</p>
    </div>
  );
};

export default Comments;
