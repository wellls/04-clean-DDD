import { Entity } from "../../core/entities/Entity";
import { UniqueEntityID } from "../../core/entities/value-objects/UniqueEntityID";

interface AnswerProps {
  content: string;
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}
