const express = require("express");
const cors = require("cors");

const { v4, validate } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body

  const repositore = {id: v4(), likes: 0, techs, title, url}

  repositories.push(repositore)

  return response.status(201).json(repositore)
});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params
  const {title, url, techs} = request.body

  if(!validate(id)){
    return response.status(400).json({
      erro: "Ocorreu um erro"
    })
  }

  const repositoreIndex = repositories.findIndex(repositore => repositore.id == id)

  const repositore = {id,likes: repositories[repositoreIndex].likes,title, url, techs}

  repositories.splice(repositoreIndex,1,repositore)

  return response.json(repositore)

});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  if(!validate(id)){
    return response.status(400).json({
      erro: "Ocorreu um erro"
    })
  }

  const repositoreIndex = repositories.findIndex(repositore => repositore.id ==id)

  repositories.splice(repositoreIndex,1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params

  if(!validate(id)){
    return response.status(400).json({
      erro: "Ocorreu um erro"
    })
  }
  const repositoreIndex = repositories.findIndex(repositore => repositore.id == id)

  repositories[repositoreIndex].likes = repositories[repositoreIndex].likes+1

  return response.json(repositories[repositoreIndex])
});

module.exports = app;
