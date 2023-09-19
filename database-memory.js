import { randomUUID } from "node:crypto"



export class DatabaseMemory {
    //chave privada
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id ,
                ...data
            }

        })
    }

    create(video){
        //UUID - UNIQUE UNIVERSAL ID
        const videoId = randomUUID()
        //colocar dentro do map de videos
        this.#videos.set(videoId, video)
    }
    update(id, video){
        //
        this.#videos.set(id, video)
    }
    delete(id){
        //colocar dentro do array de videos
        this.#videos.delete(id)
    }

}