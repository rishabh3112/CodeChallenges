const menu = [
    {
        name: 'apple',
        vegetarian: true,
    },
    {
        name: 'egg',
        vegetarian: false,
    },
    {
        name: 'Samosa',
        vegetarian: true,
    }
];

const vegeratianMenu = menu.filter(dish => dish.vegetarian);
const menuNode = document.getElementById("menu");
vegeratianMenu.forEach(dish => {
    const dishNode = document.createElement("li");
    dishNode.textContent = dish.name;
    menuNode.appendChild(dishNode);
})
