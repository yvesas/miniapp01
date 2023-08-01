import { Email } from "./email"
import { Name } from "./name"
import { LastName } from "./lastname"
import { InvalidEmailError } from './errors/invalid-email'
import { Either, left, right } from '../../shared/either'
import { InvalidNameError } from './errors/invalid-name'
import { UserData } from "./user-data"

export class User {
  public readonly email: Email
  public readonly firstName: Name
  public readonly lastName: Name
  public readonly phone: string
  public readonly password: string
  
  private constructor (email: Email, firstName: Name, lastName: Name, phone: string, password: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.password = password
    Object.freeze(this)
  }

  static create (userData: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const firstNameOrError: Either<InvalidNameError, Name> = Name.create(userData.firstName)
    const lastNameOrError: Either<InvalidNameError, Name> = Name.create(userData.lastName)    
    const emailOrError: Either<InvalidEmailError, Email> = Email.create(userData.email)
    const _phone = userData.phone
    const _password = userData.password

    if (firstNameOrError.isLeft()) {
      return left(firstNameOrError.value)
    }
    if (emailOrError.isLeft()) {
      return left(emailOrError.value)
    }
    const firstName: Name = firstNameOrError.value
    const lastName: Name = lastNameOrError.value  //FIXME
    const email: Email = emailOrError.value
    return right(new User(email, firstName, lastName, _phone, _password))
  }

}
