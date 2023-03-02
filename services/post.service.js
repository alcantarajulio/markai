import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { marked } from "marked";
import { slugify, abbreviation } from "@/utils/utils";

const postsDir = path.join(process.cwd(), "posts");

export function readMarkdownFile(dir) {
    return matter(fs.readFileSync(path.join(postsDir, dir)).toString("utf-8"));
}

function getPostId(dir) {
    return dir.replace(".md", "");
}

export function getAllPosts() {
    const posts = []
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readMarkdownFile(postDir);
        const data = post.data;
        data.abr = abbreviation(post.data.discipline);
        const content = marked.parse(post.content);
        const id = getPostId(postDir);
        posts.push({ id: id, data, content })
    })
    posts.sort((a, b) => {
        const title1 = slugify(a.data.title.toLowerCase());
        const title2 = slugify(b.data.title.toLowerCase());
        if (title1 < title2) {
            return -1;
        }
        if (title1 > title2) {
            return 1;
        }
        if (a.data.abr <= b.data.abr) {
            return -1;
        }
        return 1;
    })
    return posts;
}

export function getAllPostsByDiscipline(discipline) {
    const posts = []
    getAllPosts().map(post => {
        if (post.data.discipline == discipline) {
            posts.push(post);
        }
    })
    return posts;
}

export function getAllPostsPaths() {
    const paths = [];
    fs.readdirSync(postsDir).map((postDir) => {
        paths.push({ params: { id: getPostId(postDir) } });
    })
    return paths;
}

export function getPost(id) {
    const post = readMarkdownFile(id + ".md");
    const data = post.data;
    const content = marked.parse(post.content);
    return { id, data, content };
}
