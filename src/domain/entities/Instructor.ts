import { randomUUID } from "node:crypto";

interface InstructorProps {
  name: string;
}

class Instructor {
  private _id: string;
  private _name: string;

  constructor({ name }: InstructorProps, id?: string) {
    this._id = id ?? randomUUID();
    this._name = name;
  }
}
