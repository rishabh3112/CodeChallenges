const username = Symbol("username");
const password = Symbol("password");

const user = {
    [username]: "rishabh",
    [password]: "Gandalf the White",
    age: 323
}

console.log(user.username);
console.log(user[username]);