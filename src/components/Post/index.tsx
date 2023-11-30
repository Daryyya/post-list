import Link from 'next/link'
import React, { FC } from 'react'
import styles from './post.module.scss'

interface PostProps {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

const Post:FC<PostProps> = ({id, title, body}) => {
  return (
    <div className={`${styles.post}`}>
              <Link href={`/${id}`} onClick={() => console.log("hello")}>
                {title}
              </Link>
              <div>{body}</div>
            </div>
  )
}

export default Post