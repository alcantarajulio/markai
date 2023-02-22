import { getAllPostsPaths, getPost } from "@/services/post.service"
import Link from "next/link";

export default function Post({ post }) {
    return (
        <>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px" }}>
                <Link href={"/"}>Voltar</Link>
                <div>
                    <h1>{post.data.title}</h1>
                    <h2>{post.data.discipline}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </div>
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
    return {
        props: { post },
    }
}