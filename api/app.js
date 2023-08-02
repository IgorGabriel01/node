const express = require("express");
const app = express();
//import usuarios from "../api/teste.json" assert {type:"json"};

const usuarios = [
    {   
        "nome": "Igor",
        "Idade": 22,
        "Hobbies": [
            "Jogar lol",
            "Fazer cursos",
            "Assistir anime"
        ]
    },
    {   
        "nome": "Sandra",
        "Idade": 48,
        "Hobbies": [
            "Cozinhar",
            "Assistir Novela"
        ]
    },
    {   
        "nome": "Ana letícia",
        "Idade": 12,
        "Hobbies": [
            "Escutar K-Pop",
            "Assistir Dorama e séries",
            "Ver Tiktok"
        ]
    }
]

app.get("/", function(req,res){
    res.send(usuarios)
})

app.listen(8080, function(){
    console.log("Servidor rodando na porta 8080");
});