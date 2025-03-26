import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/Question'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      authorId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return question
}
