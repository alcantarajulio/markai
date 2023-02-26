import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/post.service"

export default function Page({ posts }) {
  return (
    <>
    <Posts posts={posts}/>
    <NavBar/>
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