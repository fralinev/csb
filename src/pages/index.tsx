import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import PostsDisplay from "./PostsDisplay";

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
      <Table data={posts} />
      <br />
      <PostsDisplay posts={posts} />
    </>
  );
}

// export async function getStaticProps() {
//   const response = await fetch("https://csb-eight.vercel.app/api/posts");
//   const posts = await response.json();

//   return {
//     props: {
//       posts: posts || [], // Ensure posts is always defined
//     },
//   };
// }
