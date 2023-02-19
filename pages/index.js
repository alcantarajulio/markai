import { getAllPosts } from "@/services/post.service"
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          <h2><Link href={`posts/${post.id}`}>{post.data.title}</Link></h2>
        </li>)}
    </ul>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts: posts }
  }
}