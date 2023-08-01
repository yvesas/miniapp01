export class InvalidEmailError extends Error implements UserError {
  constructor (email: string) {
    super(`The email "${email}" is invalid.`)
    this.name = 'InvalidEmailError'
  }
}