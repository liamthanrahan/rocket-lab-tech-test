import configureMockStore from 'redux-mock-store'
import * as actions from './account'

describe('actions', () => {
  it('should create an action to edit the account details', () => {
    const expectedAction = {
      type: 'EDIT_DETAILS',
    }
    expect(actions.editDetails().toEqual(expectedAction))
  })
})
