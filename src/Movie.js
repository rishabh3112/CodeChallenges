class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    get overview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in year ${this.releaseYear}. It recieved a rating of ${this.rating}`;
    }
}


// Run code
const returnOfTheKing = new Movie("The Lord of the Rings: The return of the king.", "Gandalf", "Middle Earth", 2012, 10);
console.log(returnOfTheKing.overview);