import { Entity } from "@/core/entities/Entity";
import { UniqueEntityID } from "@/core/entities/value-objects/UniqueEntityID";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(props, id);
    return instructor;
  }
}
