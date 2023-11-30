import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Post = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${router.query.id}/comments`
    )
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [router.query.id]);

  return (
    <>
      <div>Post {router.query.id}</div>
      <h1>Комментарии</h1>
      {comments.map((el) => (
        <div key={el.id}>
          <h3>{el.name}</h3>
          <p>{el.body}</p>
          <p>{el.email}</p>
        </div>
      ))}
    </>
  );
};

export default Post;
