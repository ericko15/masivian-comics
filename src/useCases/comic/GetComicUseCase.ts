import {UseCase} from "./UseCase";
import {ComicRepository} from "../../repositories/ComicRepository";
import {Result} from "../Result";
import {IComicModel} from "../../models/ComicModel";

export class GetComicUseCase implements UseCase {

  private readonly _repository: ComicRepository

  constructor(repository: ComicRepository) {
    this._repository = repository
  }


  async execute() {
    try {
      const comic = await this._repository.getRandomComic()
      return Result.ok<IComicModel>(comic.toJson())
    } catch (e) {
      return Result.fail(e)
    }
  }
}
