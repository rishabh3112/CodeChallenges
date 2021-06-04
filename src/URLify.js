function URLify(str) {
    str = str.toLowerCase();
    str = str.replace(/[^\w\s]/g, "");
    str = str.replace(/[\s]/g, "");
    return str;
}

console.log(URLify("Rishabh's 5 Blog"));