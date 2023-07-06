import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("/api/posts");
      console.log(response.data);
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>CSB</title>
        <meta name="description" content="Cool Stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>CSB</div>
      {posts.map((post: any) => {
        return <div key={post._id}>{post.title}</div>;
      })}
    </>
  );
}
