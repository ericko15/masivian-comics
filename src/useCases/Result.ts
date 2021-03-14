interface IResult<T> {
  isFailure: boolean
  value?: T
  error?: any
}

export class Result<T> implements IResult<T> {
  private readonly _isFailure: boolean;
  private readonly _value?: T;
  private readonly _error?: any;

  private constructor({isFailure, value, error}: IResult<T>) {
    this._isFailure = isFailure
    if (isFailure) this._error = error
    else this._value = value
  }

  static ok<T>(value: T): Result<T> {
    return new Result<T>({isFailure: false, value});
  }

  static fail(error: any): Result<any> {
    return new Result<any>({isFailure: true, error})
  }


  get isFailure(): boolean {
    return this._isFailure;
  }

  get value(): T | undefined {
    return this._value;
  }

  get error(): any {
    return this._error;
  }
}
