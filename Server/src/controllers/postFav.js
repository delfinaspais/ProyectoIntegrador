const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    console.log("holis", req.body);
    const { id, name, status, origin, image, species, gender } = req.body; // myFavorites
    
    if(!id || !name || !status || !origin || !image || !species || !gender)
    return res.status(401).send("Faltan datos") 

try {
    await Favorite.findOrCreate({
        where: { id, name, status, origin, image, species, gender },
    })
    
    const favoritos = await Favorite.findAll();
    console.log("LOSFAVS", favoritos)
    return res.json(favoritos)
        
    } catch (error) {
        return res.status(500).json(error.message)        
    }
    
}

module.exports = postFav;