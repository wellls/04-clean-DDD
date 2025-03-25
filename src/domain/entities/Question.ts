import { Entity } from "../../core/entities/Entity";
import { UniqueEntityID } from "../../core/entities/value-objects/UniqueEntityID";
import { Slug } from "./value-objects/Slug";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {}
