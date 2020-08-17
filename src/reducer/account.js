const initialState = {
  firstName: 'Bruce',
  lastName: 'Banner',
  email: 'bruce.banner@marvel.com',
  phone: '0400 000 000',
  dob: '1970-05-24',
  bio:
    'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_DETAILS':
      return Object.assign({}, state, {
        ...action.data,
      })
    default:
      return state
  }
}
