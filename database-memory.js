import { randomUUID } from "crypto"



export class DatabaseMemory {
    //chave privada
    #videos = new Map()

    list(){
        return this.#videos.values()
    }

    create(video){
        //UUID - UNIQUE UNIVERSAL ID
        const videoId = randomUUID
        //colocar dentro do map de videos
        this.#videos.set(videoId, video)
    }
    update(id, video){
        //
        this.#videos.set(video)
    }
    delete(id){
        //colocar dentro do array de videos
        this.#videos.delete(id)
    }

}