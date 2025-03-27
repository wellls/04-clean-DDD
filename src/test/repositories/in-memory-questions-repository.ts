import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/QuestionsRepository'
import { Question } from '@/domain/forum/enterprise/entities/Question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  private _items: Question[] = []

  async findById(id: string): Promise<Question | null> {
    const question = this.items.find((item) => item.id.toString() === id)
    if (!question) {
      return null
    }
    return question
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug)
    if (!question) {
      return null
    }
    return question
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questions
  }

  async save(question: Question) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id)

    this.items[itemIndex] = question
  }

  async create(question: Question): Promise<void> {
    this._items.push(question)
  }

  async delete(question: Question) {
    const itemIndex = this._items.findIndex((item) => item.id === question.id)
    this._items.splice(itemIndex, 1)
  }

  get items() {
    return this._items
  }
}
