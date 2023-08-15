import { LastName } from './lastname';
import { left, right } from '../../shared/either'
import { InvalidEmailError } from './errors/invalid-email'
import { InvalidNameError } from './errors/invalid-name'
import { InvalidPhoneError } from './errors/invalid-phone'
import { User } from './user.entity'

describe('User domain entity', () => {  
  let userdata = { email: 'abreu@mail.com', firstName: 'Abreu', lastName: 'Fulano', phone:'001', password: 'ax01', countryCode: "BR" }

  test('should not create user with invalid e-mail', async () => {
    const email = 'not_an_email'
    let _userdata = {...userdata, email:email}
    const userOrError = User.create(_userdata)
    expect(userOrError).toEqual(left(new InvalidEmailError(email)))
  })
  test('should not create user with incorrect e-mail', async () => {
    const email = 'a@mail.c'
    let _userdata = {...userdata, email:email}
    const userOrError = User.create(_userdata)
    expect(userOrError).toEqual(left(new InvalidEmailError(email)))
  })

  test('should not create user with invalid FIRST NAME (too few characters)', async () => {
    const f_name = 'ab'
    let _userdata = {...userdata, firstName:f_name}
    const userOrError = User.create(_userdata)
    expect(userOrError).toEqual(left(new InvalidNameError(f_name)))
  })
  test('should not create user with invalid LAST NAME (too few characters)', async () => {
    const l_name = 'cd'
    let _userdata = {...userdata, lastName:l_name}
    const userOrError = User.create(_userdata)    
    expect(userOrError).toEqual(left(new InvalidNameError(l_name)))
  })

  test('should not create user with invalid FIRST NAME (too many characters)', async () => {
    let f_name: string = ''
    for (let i = 0; i < 100; i++) {
      f_name += 'a'
    }
    let _userdata = {...userdata, firstName:f_name}
    const userOrError = User.create(_userdata)  
    expect(userOrError).toEqual(left(new InvalidNameError(f_name)))
  })
  test('should not create user with invalid LAST NAME (too many characters)', async () => {
    let l_name: string = ''
    for (let i = 0; i < 100; i++) {
      l_name += 'f'
    }
    let _userdata = {...userdata, lastName:l_name}
    const userOrError = User.create(_userdata) 
    expect(userOrError).toEqual(left(new InvalidNameError(l_name)))
  })

  test('should not create user with invalid FIRST NAME (only blank spaces)', async () => {
    const f_name = '  '
    let _userdata = {...userdata, firstName:f_name}
    const userOrError = User.create(_userdata)
    expect(userOrError).toEqual(left(new InvalidNameError(f_name)))
  })
  test('should not create user with invalid LAST NAME (only blank spaces)', async () => {    
    const l_name = '  '
    let _userdata = {...userdata, lastName:l_name}
    const userOrError = User.create(_userdata) 
    expect(userOrError).toEqual(left(new InvalidNameError(l_name)))
  })

  test('should not create user with invalid Brazilian Phone format', async () => {    
    const phone = 'ab01'
    const cc = 'BR'
    let _userdata = {...userdata, phone:phone, countryCode: cc}
    const userOrError = User.create(_userdata)
    expect(userOrError).toEqual(left(new InvalidPhoneError(phone)))
  })

})
