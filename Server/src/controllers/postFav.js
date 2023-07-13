const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    const { id, name, status, origin, image, species, gender } = req.body;
    
    if(!id || !name || !status || !origin || !image || !species || !gender)
      return res.status(401).send("Faltan datos") 
    
    try {
        await Favorite.findOrCreate({
            where: { id, name, status, origin, image, species, gender },
        })

        const favoritos = await Favorite.findAll();
        return res.json(favoritos)

    } catch (error) {
        return res.status(500).json(error.message)        
        }

}

module.exports = postFav;