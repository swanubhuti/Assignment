//Create an object called book with properties title, author, and pages. Add a method called displayInfo
//  to the object, which logs a message using the properties to display information about the book. 
// Instantiate the object with sample values and call the displayInfo method.

const book = {

    title:"The 48 laws of Power",
    author: "Robert greene",
    pages : 478,
    displayInfo : function() {
        console.log(`The book name is ${this.title} written by ${this.author} have pages ${this.pages}`);
    }

};

const myBook = Object.assign({},book)
myBook.displayInfo()

