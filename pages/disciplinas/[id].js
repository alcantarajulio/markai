import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { getAllDisciplinesPaths } from "@/services/discipline.service"
import { getAllPostsByDiscipline } from "@/services/post.service";

export default function Page({ posts }) {
  return (
    <>
      <Posts posts={posts} />
      <NavBar />
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
  const posts = [];
  getAllPostsByDiscipline(params.id).map((post) => {
    const id = post.id;
    const title = post.data.title
    posts.push({ id, title });
  })
  return {
    props: { posts: posts }
  }
}