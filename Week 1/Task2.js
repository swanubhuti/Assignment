const fs = require("fs").promises;
const http = require("http");

const DATA_FILE = "data.json";

// Read data asynchronously
const readDataAsync = async () => {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
};

// Write data asynchronously
const writeDataAsync = async (data) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

// Create HTTP server
const server = http.createServer(async (req, res) => {
    const { method, url } = req;
    const path = url.split("?")[0];

    // GET all items
    if (path === "/items" && method === "GET") {
        const items = await readDataAsync();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, data: items }));
        return;
    }

    // POST: Add a new item
    if (path === "/items" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const items = await readDataAsync();
                const requestData = JSON.parse(body);

                // Structure the response with ID first
                const newItem = {
                    id: items.length ? items[items.length - 1].id + 1 : 1,
                    name: requestData.name,
                    body: requestData.body,
                };

                items.push(newItem);
                await writeDataAsync(items);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, message: "Item added", data: newItem }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, message: error.message }));
            }
        });
        return;
    }

    // PUT: Update an item completely
    if (path.startsWith("/items/") && method === "PUT") {
        const id = parseInt(path.split("/")[2]);
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const items = await readDataAsync();
                const index = items.findIndex((item) => item.id === id);
                if (index === -1) throw new Error("Item not found");

                const requestData = JSON.parse(body);

                // Structure the object with ID first
                items[index] = {
                    id: id,
                    name: requestData.name,
                    body: requestData.body,
                };

                await writeDataAsync(items);

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, message: "Item updated", data: items[index] }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, message: error.message }));
            }
        });
        return;
    }

    // PATCH: Update specific fields
    if (path.startsWith("/items/") && method === "PATCH") {
        const id = parseInt(path.split("/")[2]);
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const items = await readDataAsync();
                const index = items.findIndex((item) => item.id === id);
                if (index === -1) throw new Error("Item not found");

                const updateData = JSON.parse(body);

                // Ensure ID remains first in structure
                items[index] = {
                    id: items[index].id,
                    name: updateData.name || items[index].name,
                    body: updateData.body || items[index].body,
                };

                await writeDataAsync(items);

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, message: "Item partially updated", data: items[index] }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, message: error.message }));
            }
        });
        return;
    }

    // DELETE: Remove an item
    if (path.startsWith("/items/") && method === "DELETE") {
        const id = parseInt(path.split("/")[2]);
        const items = await readDataAsync();
        const filteredItems = items.filter((item) => item.id !== id);
        await writeDataAsync(filteredItems);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, message: "Item deleted" }));
        return;
    }

    // Handle invalid routes
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Route not found" }));
});

server.listen(3000, () => console.log("Server running on port 3000"));
