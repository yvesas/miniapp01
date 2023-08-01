export class InvalidNameError extends Error implements UserError {
  constructor (name: string) {
    super(`The name "${name}" is invalid.`)
    this.name = 'InvalidNameError'
  }
}