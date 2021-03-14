import {Result} from "../Result";

export interface UseCase {
  execute(params?: any): Result<any> | Promise<Result<any>>
}
