import { AnswersRepository } from '@/domain/forum/application/repositories/AnswersRepository'
import { Answer } from '@/domain/forum/enterprise/entities/Answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  private _items: Answer[] = []

  async findById(id: string): Promise<Answer | null> {
    const answer = this.items.find((item) => item.id.toString() === id)
    if (!answer) {
      return null
    }
    return answer
  }

  async create(answer: Answer): Promise<void> {
    this._items.push(answer)
  }

  async delete(answer: Answer): Promise<void> {
    const itemIndex = this._items.findIndex((item) => item.id === answer.id)
    this._items.splice(itemIndex, 1)
  }

  get items() {
    return this._items
  }
}
