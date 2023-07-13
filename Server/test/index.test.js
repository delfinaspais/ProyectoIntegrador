const app = require('../src/app');
const session = require('supertest');
const request = session(app); // const agent

const character = {
    id: 343,
    name: "Del",
    species: "Human",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg",
    gender: "Female",
    status: "Alive"
}

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get("/rickandmorty/character/1");
            expect(response.statusCode).toBe(200)
        })

        it("Response un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {

            const response = await request.get("/rickandmorty/character/1");

                for (const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }

        })
            it("Si hay un error responde con status: 500", async () => {
                const response = await request.get("/rickandmorty/character/98456k"); // Forzar error con un id q no existe
            console.log(response.statusCode);
                expect(response.statusCode).toBe(500);
            })

    })

    describe ("GET /rickandmorty/login", () => {
        const access = { access : true }
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=delfi@gmail.com&password=1234abcd") // NO MANDAR INFO POR QUERY
            expect(response.body).toEqual(access);
        })

        it("Responde con un objeto con la propiedad access en false si la información del usuario es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=delfi@gmail.com&password=1234xxxx") // NO MANDAR INFO POR QUERY
            access.access = false // Reutilizar objetos
            expect(response.body).toEqual(access);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").send(character);
            console.log(response.body);
            expect(response.body).toContainEqual(character);
        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 2313;
            character.name = "PTM 133"
            const response = await request.post("/rickandmorty/fav").send(character);
            // console.log(response.body);
            expect(response.body.length).toBe(2);

        })
    })

})
    describe ("DELETE /rickandmorty/fav/id", async () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete("/rickandmorty/fav/2jhjih");
            expect(response.body.length).toBe(2);
        })

        it("Si el ID solicitado existe, debería eliminarlo de favoritos", async () => {
            const response = await request.delete("rickandmorty/fav/343")
            expect(response.body.length).toBe(1);

        })

})