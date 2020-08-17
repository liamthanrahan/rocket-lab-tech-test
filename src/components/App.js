import { hot } from 'react-hot-loader/root'
import 'fontsource-roboto'

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

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0 auto;
    font-family: 'Roboto';
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }
`

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
