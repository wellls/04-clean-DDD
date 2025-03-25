import { randomUUID } from "node:crypto";

interface StudentProps {
  name: string;
}

class Student {
  private _id: string;
  private _name: string;

  constructor({ name }: StudentProps, id?: string) {
    this._name = name;
    this._id = id ?? randomUUID();
  }
}
