import { QuestionsRepository } from '../repositories/QuestionsRepository'
import { CreateQuestionUseCase } from './CreateQuestion'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async () => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)
  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'any_title',
    content: 'any_content',
  })

  expect(question.id).toBeDefined()
  expect(question.title).toBe('any_title')
  expect(question.content).toBe('any_content')
})
