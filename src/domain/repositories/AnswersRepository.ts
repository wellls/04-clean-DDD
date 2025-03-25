import { Answer } from "@/domain/entities/Answer";

export interface AnswersRepository {
  create(answer: Answer): Promise<void>;
}
