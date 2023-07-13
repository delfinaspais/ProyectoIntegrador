const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")
const deleteFav = require("../controllers/deleteFav")
const { Router } = require("express")

const router = Router ();


router.get("/character/:id", (req, res) => {
    getCharById(req, res)
})

router.post("/login", (req, res) => {  // router.get("/login", postUser)
    postUser(req, res) 
})

router.get("/login", (req, res) => {  // router.get("/login", login)
    login(req, res) 
})

router.post("/fav", (req, res) => {  // router.get("/login", postUser)
    postFav(req, res) 
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})

module.exports = router;