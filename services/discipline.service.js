import chalk from "chalk";
import path from "path";
import fs from "fs";
import { readMarkdownFile } from "./post.service";

const postsDir = path.join(process.cwd(), "posts");

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