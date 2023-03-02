import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { marked } from "marked";

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

function abbreviation(disciplineName) {
    let abr = "";
    disciplineName.split(" ").forEach(word => {
        const char = word[0];
        if (char == char.toUpperCase()) {
            abr += char;
        }
    });
    abr = slugify(abr).toUpperCase();
    return abr;
}

function slugify(str) {
    const map = {
        '-': ' ',
        '-': '_',
        'a': 'á|à|ã|â|ä|Ä|À|Á|Ã|Â',
        'e': 'é|è|ê|ë|Ë|É|È|Ê',
        'i': 'í|ì|î|ï|Ï|Í|Ì|Î',
        'o': 'ó|ò|ô|õ|ö|Ö|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ'
    };
    for (const pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };
    return str;
};