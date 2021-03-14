import {GetComicUseCase} from "../useCases/comic/GetComicUseCase";
import {ComicApiRepository} from "../repositories/ComicApiRepository";

const apiRepository = new ComicApiRepository()

export const container = {
  getComicUseCase: new GetComicUseCase(apiRepository)
}
