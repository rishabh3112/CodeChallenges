import {Book} from './Book'

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies = 0, edition = "Middle Earth") {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `Correct edition for the book is ${this.edition}`;
    }
}

// Run Code
const run = () => {
    const CLRS = new TechnicalBook("CLRS", "Gandalf", 123123123, 0, "Middle Earth");
    console.log(CLRS.getEdition());
}

run();
