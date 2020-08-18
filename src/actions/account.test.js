import configureMockStore from 'redux-mock-store'
import * as actions from './account'

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

const mockStore = configureMockStore()

describe('actions', () => {
  it('should create an action to edit the account details', () => {
    const expectedAction = [
      {
        type: 'EDIT_DETAILS',
        data: newState,
      },
    ]
    const store = mockStore(initialState)

    store.dispatch(actions.editDetails(newState))

    expect(store.getActions()).toEqual(expectedAction)
  })
})
