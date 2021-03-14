import {ComicModel} from "../models/ComicModel";

export interface ComicRepository {
  getRandomComic(): ComicModel
}
