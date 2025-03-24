const http = require("http");
const fs = require("fs");

const PORT = 4000;
const DATA_FILE = "books.json";

// Helper functions for reading and writing data
const readData = () => {
    return JSON.parse(fs.existsSync(DATA_FILE) ? fs.readFileSync(DATA_FILE, "utf8") : "[]");
};

const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

// Create HTTP server
http.createServer((req, res) => {
    const [path, id] = req.url.split("/").filter(Boolean);
    const method = req.method;

    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (method === "OPTIONS") return res.writeHead(204).end();

    let books = readData();

    if (path === "books") {
        switch (method) {
            case "GET": // Fetch all books or a single book by ID
                const data = id ? books.find(book => book.id == id) : books;
                res.writeHead(data ? 200 : 404, { "Content-Type": "application/json" });
                res.end(JSON.stringify(data || { message: "Book not found" }));
                break;

            case "POST": // Create a new book
                let body = "";
                req.on("data", chunk => body += chunk);
                req.on("end", () => {
                    const newBook = JSON.parse(body);
                    newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
                    books.push(newBook);
                    writeData(books);
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(newBook));
                });
                break;

            case "PUT": // Modify a book by ID
                if (!id) return res.writeHead(400).end();
                body = "";
                req.on("data", chunk => body += chunk);
                req.on("end", () => {
                    books = books.map(book => book.id == id ? { ...JSON.parse(body), id: Number(id) } : book);
                    writeData(books);
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(books.find(book => book.id == id)));
                });
                break;

            case "DELETE": // Delete a book by ID
                if (!id) return res.writeHead(400).end();
                books = books.filter(book => book.id != id);
                writeData(books);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Book deleted" }));
                break;

            default:
                res.writeHead(405).end();
        }
    } else {
        res.writeHead(404).end(JSON.stringify({ message: "Route not found" }));
    }
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
