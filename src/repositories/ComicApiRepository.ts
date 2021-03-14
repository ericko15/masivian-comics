import {ComicRepository} from "./ComicRepository";
import {ComicModel} from "../models/ComicModel";

export class ComicApiRepository implements ComicRepository {
  async getRandomComic(): Promise<ComicModel> {
    const randomId = Math.floor(Math.random() * (2436 - 1) + 1)
    const response = await fetch(`https://xkcd.now.sh/?comic=${randomId}`)
    const data = await response.json()
    console.log(data)
    return ComicModel.create({alt: data.alt, img: data.img, title: data.title});
  }

}
