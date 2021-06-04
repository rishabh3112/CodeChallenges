function FoodTruck(vendorMenus) {
    const duplicateItems = vendorMenus.flat();
    const items = new Set();
    duplicateItems.forEach((item) => items.add(item));

    const combinedMenuNode = document.getElementById("combined-menu");
    items.forEach((item) => {
        const itemNode = document.createElement("li");
        itemNode.textContent = item;
        combinedMenuNode.appendChild(itemNode);
    })
}

FoodTruck([["apple", "mango"], ["apple", "samosa"], ["dosa"], ["chole bhature", "samosa"]]);