import { Entity } from '@/core/entities/Entity'
import { UniqueEntityID } from '@/core/entities/value-objects/UniqueEntityID'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)
    return student
  }
}
