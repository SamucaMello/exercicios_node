import express from "express" 

const port = 8000 
const app = express()

let acessos = 0

app.get("/", (req, res)=> {
    return res.send(`Acessos: ${acessos}`)
})

app.listen(port, ()=>console.log(`Iniciado na porta: ${port}`))