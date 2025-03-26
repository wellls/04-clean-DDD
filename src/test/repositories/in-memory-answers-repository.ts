import { AnswersRepository } from '@/domain/forum/application/repositories/AnswersRepository'
import { Answer } from '@/domain/forum/enterprise/entities/Answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  private _items: Answer[] = []

  async create(answer: Answer): Promise<void> {
    this._items.push(answer)
  }

  get items() {
    return this._items
  }
}
