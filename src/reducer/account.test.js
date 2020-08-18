import account from './account'

const initialState = {
  firstName: 'Bruce',
  lastName: 'Banner',
  email: 'bruce.banner@marvel.com',
  phone: '0400 000 000',
  dob: '1970-05-24',
  bio:
    'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
}

const newState = {
  firstName: 'Liam',
  lastName: 'Hanrahan',
  email: 'liam.hanrahan@dc.com',
  phone: '0400 321 123',
  dob: '1992-08-08',
  bio: 'Liam Hanrahan is a web developer.',
}

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(account(undefined, {})).toEqual(initialState)
  })

  it('should handle EDIT_DETAILS', () => {
    expect(
      account(undefined, {
        type: 'EDIT_DETAILS',
        data: newState,
      })
    ).toEqual(newState)
  })
})
