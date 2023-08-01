import { left } from '../../shared/either'
import { InvalidEmailError } from './errors/invalid-email'
import { InvalidNameError } from './errors/invalid-name'
import { User } from './user.entity'

describe('User domain entity', () => {
  test('should not create user with invalid e-mail', async () => {
    const email = 'a@mail.co'
    const userOrError = User.create({ name: 'Abreu', email: email })
    expect(userOrError).toEqual(left(new InvalidEmailError(email)))
  })

  test('should not create user with invalid name (too few characters)', async () => {
    const name = 'ab'
    const user = User.create({ name: name, email: 'abreu@mail.com' })
    expect(user).toEqual(left(new InvalidNameError(name)))
  })

  test('should not create user with invalid name (too many characters)', async () => {
    let name: string = ''
    for (let i = 0; i < 100; i++) {
      name += 'b'
    }
    const user = User.create({ name: name, email: 'abreu@mail.com' })
    expect(user).toEqual(left(new InvalidNameError(name)))
  })

  test('should not create user with invalid name (only blank spaces)', async () => {
    const name = '   '
    const user = User.create({ name: name, email: 'abreu@mail.com' })
    expect(user).toEqual(left(new InvalidNameError(name)))
  })
})