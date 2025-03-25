import { Answer } from "../entities/Answer";
import { AnswersRepository } from "../repositories/AnswersRepository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ authorId: instructorId, content, questionId });

    await this.answersRepository.create(answer);
    return answer;
  }
}
