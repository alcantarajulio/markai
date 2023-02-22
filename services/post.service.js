import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { marked } from "marked";
import chalk from "chalk";

const postsDir = path.join(process.cwd(), "posts");

function readMarkdownFile(dir) {
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
        const content = marked.parse(post.content);
        const id = getPostId(postDir);
        posts.push({ id: id, data, content })
    })
    return posts;
}

export function getAllPostsByDiscipline(discipline) {
    const posts = []
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readMarkdownFile(postDir);
        const data = post.data;
        const content = marked.parse(post.content);
        const id = getPostId(postDir);
        if (post.data.discipline == discipline) {
            posts.push({ id: id, data, content })
        }
    })
    return posts;
}

export function getAllDisciplines() {
    const disciplines = new Set();
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readMarkdownFile(postDir);
        if (post.data.discipline) {
            disciplines.add(post.data.discipline)
        } else {
            console.error(chalk.red(`error: discipline not found (${postDir})`));
        }
    });
    return Array.from(disciplines);
}

export function getAllDisciplinesPaths() {
    return getAllDisciplines().map(
        (discipline) => {
            return `/disciplinas/${discipline}`
        }
    )
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
