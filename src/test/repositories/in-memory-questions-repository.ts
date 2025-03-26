import { QuestionsRepository } from '@/domain/forum/application/repositories/QuestionsRepository'
import { Question } from '@/domain/forum/enterprise/entities/Question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  private _items: Question[] = []

  async create(question: Question): Promise<void> {
    this._items.push(question)
  }

  get items() {
    return this._items
  }
}
