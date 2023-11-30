import Comments from "@/components/Comments";
import Container from "@/ui/container";
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
    <Container>
      <h1 style={{marginBottom: '20px'}}>Комментарии к посту {router.query.id}: </h1>
      {comments.map((el) => (
        <Comments key={el.id} name={el.name} body={el.body} email={el.email}/>
      ))}
    </Container>
  );
};

export default Post;
