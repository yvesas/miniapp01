import { Either, left, right } from '../../shared/either'
import { InvalidNameError } from './errors/invalid-name'

export class Name {
  private readonly name: string

  private constructor (name: string) {
    this.name = name
    Object.freeze(this)
  }

  static create (name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return left(new InvalidNameError(name))
    }
    return right(new Name(name))
  }

  get value (): string {
    return this.name
  }

  static validate (name: string): boolean {
    if (!name || name.trim().length < 3 || name.trim().length > 50) {
      return false
    }
    return true
  }
}