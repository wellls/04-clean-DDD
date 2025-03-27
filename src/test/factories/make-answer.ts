import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/Answer'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      content: faker.lorem.text(),
      questionId: new UniqueEntityID(),
      authorId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answer
}
