import { Entity } from "../../core/entities/Entity";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {}
