const http = require("http");
const characters = require("./utils/data.js")
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Cors
    

    if(req.url.includes("rickandmorty/character")) {
        
        const id = req.url.split("/").at(-1); // .pop() / ("/")[3]

        const character = characters.filter((char) => char.id === Number(id));
        // const character = data.find((char) => char.id === Number(id))
        
        if (character.length === 0) {                            //filter() devuelve un array con los elementos que cumplen la condición especificada. Si no se encuentra ningún personaje que coincida con el id dado, el array resultante estará vacío ([]), lo cual no es evaluado como un valor falsy en JavaScript
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            return res.end("Character not found")
        }

        res
        .writeHead(200, {"content-type": "application/json"})  // Setear headers
        return res.end(JSON.stringify(character[0])) // El cliente espera una respuesta en forma de texto
    }
}).listen(PORT, "localhost", () => {
    console.log("puerto")
})