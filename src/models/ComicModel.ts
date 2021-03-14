export interface IComicModel {
  alt: string;
  img: string;
  title: string;
}

export class ComicModel implements IComicModel {
  private readonly _alt: string;
  private readonly _img: string;
  private readonly _title: string;

  private constructor(props: IComicModel) {
    this._alt = props.alt
    this._img = props.img
    this._title = props.title
  }

  get alt(): string {
    return this._alt;
  }

  get img(): string {
    return this._img;
  }

  get title(): string {
    return this._title;
  }

  static create(props: IComicModel) {
    return new ComicModel(props)
  }

  toJson() {
    return {
      alt: this._alt,
      img: this._img,
      title: this._title
    }
  }

}
