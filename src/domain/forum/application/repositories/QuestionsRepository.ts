import { Question } from '@/domain/forum/enterprise/entities/Question'

export interface QuestionsRepository {
  create(question: Question): Promise<void>
}
