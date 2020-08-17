import { hot } from 'react-hot-loader/root'
import React from 'react'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import AccountView from './AccountView'
import AccountEdit from './AccountEdit'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const initialState = {
  firstName: 'Bruce',
  lastName: 'Banner',
  email: 'bruce.banner@marvel.com',
  phone: '0400 000 000',
  dob: '31 May 1970',
  bio:
    'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
}

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={AccountView} />
        <Route path="/edit" component={AccountEdit} />
      </Switch>
    </Container>
  )
}

export default hot(App)
