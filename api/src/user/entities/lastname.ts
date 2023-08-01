import { Either, left, right } from '../../shared/either'
import { InvalidNameError } from './errors/invalid-name'

export class LastName {
  private readonly lastname: string

  private constructor (lastname: string) {
    this.lastname = lastname
    Object.freeze(this)
  }

  static create (lastname: string): Either<InvalidNameError, LastName> {
    if (!LastName.validate(lastname)) {
      return left(new InvalidNameError(lastname))
    }
    return right(new LastName(lastname))
  }

  get value (): string {
    return this.lastname
  }

  static validate (lastname: string): boolean {
    if (!lastname || lastname.trim().length < 3 || lastname.trim().length > 50) {
      return false
    }
    return true
  }
}