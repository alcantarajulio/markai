export function abbreviation(disciplineName) {
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

export function slugify(str) {
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