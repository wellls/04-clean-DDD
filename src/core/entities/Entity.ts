import { UniqueEntityID } from "./value-objects/UniqueEntityID";

export class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = new UniqueEntityID(id);
  }

  get id() {
    return this._id;
  }
}
