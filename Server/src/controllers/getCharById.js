const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios");

const getCharById = async (req, res) => {
    const { id } = req.params;
         try {

           const { data } = await axios(`${URL}/${id}`)
        
        if (!data.name) throw new Error (`ID: ${id} Not found`)
        
            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender,
                status: data.status
            }

            return res.status(200).json(character)
        }
      
    catch(error) { 
        return error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
}

}

module.exports = getCharById;



// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = async (req, res) => {
//     try {

//     const { id } = req.params;
//     const { name, gender, species, origin, image, status } = (await axios(URL + id)).data;
//     const character = { id, name, gender, species, origin, image, status }
    
//     return character.name
//     ? res.status(200).json({ id, name, gender, species, origin, image, status })
//     : res.status(404).send("Not found")

//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
    
//     }
    
// module.exports = getCharById;


