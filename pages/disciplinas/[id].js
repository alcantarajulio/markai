import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { getAllDisciplinesPaths } from "@/services/discipline.service"
import { getAllPostsByDiscipline } from "@/services/post.service";
import React from "react";

// @ts-ignore
export default function Page({ posts }) {
  /** @type {{ id: string; title: string; }[]} */
  const _posts = posts;
  return (
    <>
      <div className="teste">
        <Posts posts={_posts} />
        <NavBar />
      </div>
    </>
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