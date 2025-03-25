import { randomUUID } from "node:crypto";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer {
  private _id: string;
  private _content: string;
  private _authorId: string;
  private _questionId: string;

  constructor({ authorId, content, questionId }: AnswerProps, id?: string) {
    this._id = id ?? randomUUID();
    this._content = content;
    this._authorId = authorId;
    this._questionId = questionId;
  }

  get content(): string {
    return this._content;
  }
}
