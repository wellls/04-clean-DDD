import { InMemoryQuestionsRepository } from '@/test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './CreateQuestion'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase
describe('Create Question Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  test('create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'any_title',
      content: 'any_content',
    })

    expect(question.id).toBeDefined()
    expect(question.title).toBe('any_title')
    expect(question.content).toBe('any_content')
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
