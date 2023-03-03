import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { marked } from "marked";
import { slugify, abbreviation } from "@/utils/utils";

const postsDir = path.join(process.cwd(), "posts");

/**
 * Lê markdown de um post.
 * @param {string} postPath - caminho do post.
 * @returns dados do markdown do post.
 */
export function readPostMarkdownFile(postPath) {
    return matter(fs.readFileSync(path.join(postsDir, postPath)).toString("utf-8"));
}

/**
 * Gera o ID de um post.
 * @param {string} postPath - caminho do post.
 * @returns {string} postID.
 */
function getPostId(postPath) {
    return postPath.replace(".md", "");
}

/**
 * Pega todos os posts do diretório "posts".
 * @returns todos os posts em ordem alfabética.
 */
export function getAllPosts() {
    const posts = []
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readPostMarkdownFile(postDir);
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

/**
 * Pega todos os posts de uma disciplina.
 * @param {string} discipline - nome da disciplina. 
 * @returns posts da disciplina em ordem alfabética.
 */
export function getAllPostsByDiscipline(discipline) {
    const posts = []
    getAllPosts().map(post => {
        if (post.data.discipline == discipline) {
            posts.push(post);
        }
    })
    return posts;
}

/**
 * Pega o caminho de todos os posts.
 * @returns caminhos dos posts.
 */
export function getAllPostsPaths() {
    const paths = [];
    fs.readdirSync(postsDir).map((postDir) => {
        paths.push({ params: { id: getPostId(postDir) } });
    })
    return paths;
}

/**
 * Pega o post usando seu ID.
 * @param {string} id - ID do post.
 * @returns o post.
 */
export function getPost(id) {
    const post = readPostMarkdownFile(id + ".md");
    const data = post.data;
    const content = marked.parse(post.content);
    return { id, data, content };
}
