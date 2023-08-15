export class InvalidPhoneError extends Error implements UserError {
  constructor (phone: string) {
    super(`The phone "${phone}" is invalid.`)
    this.name = 'InvalidPhoneError'
  }
}