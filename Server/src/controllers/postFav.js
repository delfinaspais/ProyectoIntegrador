const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
<<<<<<< HEAD
    console.log("holis", req.body);
    const { id, name, status, origin, image, species, gender } = req.body; // myFavorites
=======
    const { id, name, status, origin, image, species, gender } = req.body;
    console.log(req.body)
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
    
    if(!id || !name || !status || !origin || !image || !species || !gender)
    return res.status(401).send("Faltan datos") 

try {
    await Favorite.findOrCreate({
        where: { id, name, status, origin, image, species, gender },
    })
    
<<<<<<< HEAD
    const favoritos = await Favorite.findAll();
    console.log("LOSFAVS", favoritos)
    return res.json(favoritos)
        
=======
    try {
        await Favorite.findOrCreate({
            where: { id, name, status, origin, image, species, gender },
        })

        const favoritos = await Favorite.findAll();
        
        return res.json(favoritos)

>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
    } catch (error) {
        return res.status(500).json(error.message)        
    }
    
}

module.exports = postFav;