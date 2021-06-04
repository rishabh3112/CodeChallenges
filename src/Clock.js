function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
const titleNode = document.getElementById("title");
setInterval(() => {
    titleNode.textContent = getTime();
}, 1000)