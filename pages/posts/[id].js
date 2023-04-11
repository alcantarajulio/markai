import { getAllPostsPaths, getPost } from "@/services/post.service";
import PostSingle from "@/components/PostSingle"
import React from "react";
import Layout from "@/components/Layout";

/**
 * @param {{post: import("../../services/post.service").Post}} props
 */
export default function Page({ post }) {
    return (
        <Layout>
            <PostSingle post={post} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsPaths();
    return {
        paths: paths,
        fallback: false
    }
}

// @ts-ignore
export async function getStaticProps({ params }) {
    const post = getPost(params.id)
    return {
        props: { post },
    }
}