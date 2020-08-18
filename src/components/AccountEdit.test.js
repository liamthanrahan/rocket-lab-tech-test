import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountEdit from './AccountEdit'

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

const invalidState = {
  firstName: '',
  lastName: 'Hanrahan',
  email: 'liam.hanrahan@dc.',
  phone: '0400 321 123',
  dob: '1992-08-08AD',
  bio: 'Liam Hanrahan is a web developer.',
}

it('should not mutate state when back button is clicked', () => {
  const mockEditDetails = jest.fn()
  render(
    <Router>
      <AccountEdit
        data={initialState}
        editDetails={mockEditDetails}
        history={{ push: jest.fn() }}
      />
    </Router>
  )

  const backButton = screen.getByTestId('back')

  fireEvent.click(backButton)

  expect(mockEditDetails).toBeCalledTimes(0)
})

it('should mutate state when save button is clicked and valid data is provided', () => {
  const mockEditDetails = jest.fn()
  render(
    <Router>
      <AccountEdit
        data={newState}
        editDetails={mockEditDetails}
        history={{ push: jest.fn() }}
      />
    </Router>
  )

  const saveButton = screen.getByTestId('save')

  fireEvent.click(saveButton)

  expect(mockEditDetails).toBeCalledTimes(1)
})

it('should not mutate state when save button is clicked and invalid data is provided', () => {
  const mockEditDetails = jest.fn()
  render(
    <Router>
      <AccountEdit
        data={invalidState}
        editDetails={mockEditDetails}
        history={{ push: jest.fn() }}
      />
    </Router>
  )

  const saveButton = screen.getByTestId('save')

  fireEvent.click(saveButton)

  expect(mockEditDetails).toBeCalledTimes(0)
})
