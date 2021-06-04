const endpoint = "https://randomuser.me/api/?results=5";
const containerNode = document.getElementById("five-friends");
containerNode.style.visibility = "";

const setThumbnails = async () => {
    const response = await fetch(endpoint);
    const users = await response.json();
    
    users.results.forEach((user) => {
        const imageNode = document.createElement("img");
        imageNode.src = user.picture.thumbnail;
        containerNode.appendChild(imageNode);
    })
}

setThumbnails();