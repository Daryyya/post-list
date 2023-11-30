import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Pagination from "@/components/Pagination";
import styles from "@/styles/Home.module.css";
import Container from "@/ui/container";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((el) =>
      el.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [posts, searchValue]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;

  const currentItems = useMemo(
    () => filteredPosts.slice(itemOffset, endOffset),
    [filteredPosts, itemOffset, endOffset]
  );
  const pageCount = Math.ceil(filteredPosts.length / 10);

  const handlePageClick = useCallback(
    (event: {selected: number}) => {
      const newOffset = (event.selected * 10) % filteredPosts.length;
      setItemOffset(newOffset);
    },
    [filteredPosts.length]
  );
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Amazing posts!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.header}`}>
        <h1 className={`${styles.title}`}>POST LIST</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Поиск..."
            className={`${styles.input}`}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </form>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <Container>
          {currentItems.map((el) => (
            <Post key={el.id} id={el.id} body={el.body} title={el.title}/>
          ))}
        </Container>

        <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
      </main>
    </>
  );
}
