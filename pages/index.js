import { getAllPosts } from "@/services/post.service"
import Link from "next/link";

export default function Page({ posts }) {
  return (
    <>
    <Link href={"/disciplinas"}>filtrar por disciplinas</Link>
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          <h2><Link href={`/${post.id}`}>{post.title}</Link></h2>
        </li>)}
    </ul>
    </>
  )
}

export async function getStaticProps() {
  const posts = [];
  getAllPosts().map((post) => {
    const id = post.id;
    const title = post.data.title
    posts.push({id, title});
  })
  return {
    props: { posts: posts }
  }
}