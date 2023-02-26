import NavBar from "@/components/NavBar";
import { getAllPostsPaths, getPost } from "@/services/post.service"

export default function Page({ post }) {
    return (
        <>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 10px", marginBottom: "44px" }}>
                <div>
                    <h1>{post.data.title}</h1>
                    <h2>{post.data.discipline}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </div>
            <NavBar/>
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