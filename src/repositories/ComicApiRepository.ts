import {ComicRepository} from "./ComicRepository";
import {ComicModel} from "../models/ComicModel";

class ComicApiRepository implements ComicRepository {
  getRandomComic(): ComicModel {
    return ComicModel.create({alt: '', img: '', title: ''});
  }

}
