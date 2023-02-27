import chalk from "chalk";
import path from "path";
import fs from "fs";
import { readMarkdownFile } from "./post.service";

const postsDir = path.join(process.cwd(), "posts");
const disciplinesDir = path.join(process.cwd(), "disciplines");

export function getAllDisciplines() {
    const names = new Set();
    const disciplines = [];
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readMarkdownFile(postDir);
        if (post.data.discipline) {
            const name = post.data.discipline;
            const photo = getDisciplinePhoto(name);
            if (!names.has(name)) {
                names.add(name);
                disciplines.push({ name, photo })
            }
        } else {
            console.error(chalk.red(`error: discipline not found (${postDir})`));
        }
    });
    return disciplines;
}

function getDisciplinePhoto(disciplineName) {
    const disciplines = JSON.parse(fs.readFileSync(path.join(disciplinesDir, "disciplines.json")).toString());
    let photo = "";
    disciplines.forEach(discipline => {
        if (discipline.name == disciplineName) {
            photo = discipline.photo;
        }
    });
    if (photo == "") {
        console.error(chalk.red(`error: photo not found (${disciplineName})`));
        photo = "https://simpl.info/webp/cherry.webp"
    }
    return photo;
}

export function getAllDisciplinesPaths() {
    return getAllDisciplines().map(
        (discipline) => {
            return `/disciplinas/${discipline.name}`
        }
    )
}