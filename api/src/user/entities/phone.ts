import { Either, left, right } from '../../shared/either'
import { InvalidPhoneError } from './errors/invalid-phone'
import { phonePartners } from './utils/phone-partners'

export class Phone {
  private readonly phone: string
  private readonly cc: string

  private constructor (phone: string, countryCode: string) {
    this.phone = phone
    // this.cc = countryCode
    Object.freeze(this)
  }

  static create (phone: string, countryCode: string): Either<InvalidPhoneError, Phone> {
    if (!Phone.validate(phone, countryCode)) {
      return left(new InvalidPhoneError(phone))
    }
    return right(new Phone(phone, countryCode))
  }

  get value(): string {
    return this.phone
  }
  get countryCode(): string {
    return this.cc
  }

  static validate (phone: string, cc: string): boolean {
    var tester = /^[\d()\-\+ ]+$/

    if (!phone) {
      return false
    }

    if (phone.length > 22) {
      return false
    }

    if (!tester.test(phone)) {
      return false
    }

    if(cc){
      const countryWithCountryCode= phonePartners.find(phoneCode => phoneCode.cc === cc);
      if (countryWithCountryCode && countryWithCountryCode.tester) {
        if (!countryWithCountryCode.tester.test(phone)) {
          return false
        }      
      }
    }

    return true
  }

  // static validateFormatBrazil (phone: string): boolean {
  //   var tester = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    
  //   if (!phone) {
  //     return false
  //   }
  //   if (!tester.test(phone)) {
  //     return false
  //   }
    
  //   return true
  // }
}