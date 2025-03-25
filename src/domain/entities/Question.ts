import { Entity } from "../../core/entities/Entity";
import { Slug } from "./value-objects/Slug";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}

export class Question extends Entity<QuestionProps> {}
