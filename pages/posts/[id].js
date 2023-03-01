import NavBar from "@/components/NavBar";
import { getAllPostsPaths, getPost } from "@/services/post.service";
import PostSingle from "@/components/PostSingle"

export default function Page({ post, baseUrl }) {
    return (
        <>
            <PostSingle post={post} baseUrl={baseUrl} />
            <NavBar />
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsPaths();
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = getPost(params.id)
    const baseUrl = process.env.NODE_ENV !== "production" ? "" : "https://kenbme.github.io/markai";
    return {
        props: { post, baseUrl },
    }
}