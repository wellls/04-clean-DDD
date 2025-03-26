import { InMemoryAnswersRepository } from '@/test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './AnswerQuestion'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase
describe('Create Answer Use Case', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  test('create a answer', async () => {
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'any_content',
    })

    expect(answer.id).toBeDefined()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
