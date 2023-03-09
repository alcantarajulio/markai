import { getAllPostsPaths, getPost } from "@/services/post.service";
import PostSingle from "@/components/PostSingle"
import React from "react";

/**
 * @param {{post: import("../../services/post.service").Post}} props
 */
export default function Page({ post }) {
    return (
        <>
            <PostSingle post={post} />
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

// @ts-ignore
export async function getStaticProps({ params }) {
    const post = getPost(params.id)
    return {
        props: { post },
    }
}