export class Book {
    constructor(title, author, isbn, numCopies = 0){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    get availability() {
        if (this.numCopies === 0) {
            return 'out of stock';
        } else if (this.numCopies < 10) {
            return 'low stock';
        } else {
            return 'in stock';
        }
    }

    sell(numSold) {
        if (numSold > this.numCopies) {
            return new Error(`Insufficient stock. Avaiable stock is ${this.numCopies} but tried selling ${numSold}`);
        }
        this.numCopies -= numSold;
    }

    restock(numAdded) {
        this.numCopies += numAdded;
    }
}

// Run Code
const run = () => {
    const returnOfTheKing = new Book("The Return of the King", "JRR. Toilken", 1231231223, 20);
    console.log(`Expect avaliablity to be in stock. Recieved ${returnOfTheKing.availability}`);
    console.log(`Expect sell to not throw error. ${returnOfTheKing.sell(15)}`);
    console.log(`Expect avaliablity to be low stock. Recieved ${returnOfTheKing.availability}`);
};
