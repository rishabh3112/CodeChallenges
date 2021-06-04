const buttonContainerNode = document.getElementById("clousure");
buttonContainerNode.style.visibility = "";


const getBackgroundColorSetter = (color) => {
    return (e) => {
        e.preventDefault();
        document.body.style.backgroundColor = color;
    }
}

const colors = {blue: '#80a3db', pink: '#eebddd', green: '#cdda95'};
const backgroundSetters = Object.keys(colors).reduce((obj, color) => {
    obj[color] = getBackgroundColorSetter(colors[color]);
    return obj;
}, {});

Object.keys(colors).forEach((color) => {
    const buttonNode = document.createElement("button");
    buttonNode.textContent = color.toUpperCase();
    buttonNode.addEventListener('click', backgroundSetters[color])
    buttonContainerNode.append(buttonNode);
});
