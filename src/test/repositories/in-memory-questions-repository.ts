import { QuestionsRepository } from '@/domain/forum/application/repositories/QuestionsRepository'
import { Question } from '@/domain/forum/enterprise/entities/Question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  private _items: Question[] = []

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug)
    if (!question) {
      return null
    }
    return question
  }

  async create(question: Question): Promise<void> {
    this._items.push(question)
  }

  get items() {
    return this._items
  }
}
