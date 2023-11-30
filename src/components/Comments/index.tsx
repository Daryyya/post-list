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
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
};

export default Comments;
