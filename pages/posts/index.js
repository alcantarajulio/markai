import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/post.service"
import React from "react";

// @ts-ignore
export default function Page({ posts }) {
  /** @type {{ id: string; title: string; discipline: string; abr: string; }[]} */
  const _posts = posts;
  return (
    <>
      <Posts posts={_posts} />
      <NavBar />
    </>
  )
}

export async function getStaticProps() {
  /** @type {{ id: string; title: string; discipline: string; abr: string; }[]} */
  const posts = [];
  getAllPosts().map((post) => {
    const id = post.id;
    const title = post.data.title
    const discipline = post.data.discipline;
    const abr = post.data.abr;
    posts.push({ id, title, discipline, abr });
  })
  return {
    props: { posts: posts }
  }
}