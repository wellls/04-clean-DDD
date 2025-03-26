import { InMemoryQuestionsRepository } from '@/test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './GetQuestionBySlug'
import { Slug } from '../../enterprise/entities/value-objects/Slug'
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49'
import { Question } from '../../enterprise/entities/Question'
import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase
describe('Get Question By Slug Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  test('should be able to get a question by slug', async () => {
    const slug = 'example-title'
    const newQuestion = Question.create({
      title: 'Example Title',
      content: 'Example Content',
      slug: Slug.create(slug),
      authorId: new UniqueEntityID(),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug,
    })
    expect(question.id).toBeTruthy()
    expect(question.title).toBe('Example Title')
    expect(question.content).toBe('Example Content')
    expect(question.slug.value).toBe('example-title')
  })
})
