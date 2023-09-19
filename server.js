//import {createServer} from 'node:http'

//const server = createServer((request, response) => {

    // response.write("oi")
  //  return response.end()
//})

//server.listen(3333)



import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'


const server = fastify()

const database = new DatabaseMemory()

server.post('/videos' , (request , reply) => {

    const {titulo , descricao , duracao} = request.body
    database.create({
        titulo,
        descricao,
        duracao
    })

    console.log(database.list())

    return reply.status(201).send("Vídeo criado com sucesso!")
})
server.get('/videos' , () => {
    const videos = database.list()


    return videos
})
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { titulo, descricao, duracao } = request.body

    database.update(videoId , {
        titulo , 
        descricao , 
        duracao
    } )

    return reply.status(204).send("Vídeo Atualizado com sucesso")
})
server.delete('/videos/:id' , () => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,

}
 )