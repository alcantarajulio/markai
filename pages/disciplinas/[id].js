import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import { getAllDisciplinesPaths } from "@/services/discipline.service"
import { getAllPostsByDiscipline } from "@/services/post.service";
import React from "react";

/**
 * @typedef Posts
 * @property {{ id: string; title: string; abr:null}[]} posts
 */

/**
 * @param {Posts} posts
 */
export default function Page({ posts }) {
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllDisciplinesPaths();
  return {
    paths: paths,
    fallback: false
  }
}

// @ts-ignore
export async function getStaticProps({ params }) {
  /** @type {{ id: string; title: string; }[]} */
  const posts = [];
  getAllPostsByDiscipline(params.id).map((post) => {
    const id = post.id;
    const title = post.data.title;
    if (post.data.fixed) {
      posts.unshift({ id, title });
    } else {
      posts.push({ id, title });
    }
  })
  return {
    props: { posts: posts }
  }
}