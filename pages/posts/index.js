import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/post.service"
import React from "react";

/**
 * @typedef {{id: string; title: string; discipline: string; abr: string;}} Post
 */

/**
 * @param {{posts: Post[]}} props
 */
export default function Page({ posts }) {
  return (
    <>
      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  /** @type {Post[]} */
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