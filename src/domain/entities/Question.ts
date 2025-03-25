import { randomUUID } from "node:crypto";

interface QuestionProps {
  title: string;
  content: string;
  slug: string;
  authorId: string;
}

export class Question {
  private _id: string;
  private _title: string;
  private _content: string;
  private _slug: string;
  private _authorId: string;

  constructor({ authorId, content, title, slug }: QuestionProps, id?: string) {
    this._id = id ?? randomUUID();
    this._authorId = authorId;
    this._title = title;
    this._content = content;
    this._slug = slug;
  }
}
