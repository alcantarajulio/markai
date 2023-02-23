import { getAllDisciplines, getAllDisciplinesPaths, getAllPostsByDiscipline } from "@/services/post.service"
import Link from "next/link";

export default function Page({ posts }) {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            <h2><Link href={`/${post.id}`}>{post.data.title}</Link></h2>
          </li>)}
      </ul>
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

export async function getStaticProps({ params }) {
  const posts = getAllPostsByDiscipline(params.id);
  return {
    props: { posts: posts }
  }
}