import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'
import { Question } from '../../enterprise/entities/Question'
import { QuestionsRepository } from '../repositories/QuestionsRepository'

interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}

interface CreateQuestionUseCaseResponse {
  question: Question
}

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      content,
      title,
    })

    await this.questionRepository.create(question)

    return {
      question,
    }
  }
}
