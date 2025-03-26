import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'
import { Answer } from '@/domain/forum/enterprise/entities/Answer'
import { AnswersRepository } from '@/domain/forum/application/repositories/AnswersRepository'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)
    return answer
  }
}
