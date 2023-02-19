import { getAllPostsPaths, getPost } from "@/services/post.service"

export default function Post({ post }) {
    return (
        <div>
            <h2>{post.data.title}</h2>
            <h2>{post.data.discipline}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
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