import { Either, left, right } from '../../shared/either'
import { InvalidEmailError } from './errors/invalid-email'
import { InvalidNameError } from './errors/invalid-name'
import { InvalidPhoneError } from "./errors/invalid-phone"
import { Email } from "./email"
import { Name } from "./name"
import { Phone } from "./phone"
import { UserData } from "./user-data"

export class User {
  public readonly email: Email
  public readonly firstName: Name
  public readonly lastName: Name
  public readonly phone: Phone
  public readonly password: string
  
  private constructor (email: Email, firstName: Name, lastName: Name, phone: Phone, password: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.password = password
    Object.freeze(this)
  }

  static create (userData: UserData): Either<InvalidNameError | InvalidEmailError | InvalidPhoneError, User> {
    const firstNameOrError: Either<InvalidNameError, Name> = Name.create(userData.firstName);
    const lastNameOrError: Either<InvalidNameError, Name> = Name.create(userData.lastName);  
    const emailOrError: Either<InvalidEmailError, Email> = Email.create(userData.email);
    const phoneOrError: Either<InvalidPhoneError, Phone> = Phone.create(userData.phone, userData.countryCode);
    const _password = userData.password

    if (firstNameOrError.isLeft()) {
      return left(firstNameOrError.value)
    }
    if (lastNameOrError.isLeft()) {
      return left(lastNameOrError.value)
    }
    if (emailOrError.isLeft()) {
      return left(emailOrError.value)
    }
    if (phoneOrError.isLeft()) {
      return left(phoneOrError.value)
    }
    
    const firstName: Name = firstNameOrError.value
    const lastName: Name = lastNameOrError.value
    const email: Email = emailOrError.value
    const phone: Phone = phoneOrError.value
    return right(new User(email, firstName, lastName, phone, _password))
  }

}
