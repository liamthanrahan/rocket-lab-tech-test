import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editDetails } from '../actions'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import styled from '@emotion/styled'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const Top = styled.div`
  display: flex;
  flex-direction: row;
`

const PageHeader = styled.h1`
  flex: 1;
  color: #00ae95;
  margin-bottom: 0;
`

const BackButton = styled(Link)`
  align-self: flex-end;
`

const BackButtonIcon = styled(MdKeyboardArrowLeft)`
  height: 2em;
  width: 2em;
  color: black;
`

const SaveButton = styled(Link)`
  align-self: flex-end;
  color: #169bd5;
  text-decoration: none;
`

const StyledCard = styled(Card)`
  margin-top: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
`

const StretchBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  &:not(:first-of-type) {
    margin-top: 1em;
  }
`

const Label = styled.div`
  color: #00ae95;
  font-weight: 700;
`

const FullWidthTextareaAutosize = styled(TextareaAutosize)`
  flex: 1;
  margin-top: 1em;
`

class AccountEdit extends Component {
  constructor(props) {
    super(props)
    // Copy across the existing details to the state to be edited from the controlled inputs
    // If we choose not to save the changes we don't want to overwrite the previous values
    this.state = Object.assign({}, props.data)
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  handleError = (e) => {
    console.log('e', e)
    return false
  }

  render() {
    const { firstName, lastName, email, phone, dob, bio } = this.state
    return (
      <Container maxWidth="sm">
        <Top>
          <BackButton to="/">
            <BackButtonIcon />
          </BackButton>
          <PageHeader>My Account</PageHeader>
          <SaveButton to="/">Save</SaveButton>
        </Top>
        <StyledCard>
          <StretchBox>
            <Label>First Name</Label>
            <TextField
              //   error={this.isFirstNameError()}
              id="standard-basic"
              fullWidth
              value={firstName}
              onChange={(e) => this.handleChange(e, 'firstName')}
            />
          </StretchBox>
          <StretchBox>
            <Label>Last name</Label>
            <TextField
              id="standard-basic"
              fullWidth
              value={lastName}
              onChange={(e) => this.handleChange(e, 'lastName')}
            />
          </StretchBox>
          <StretchBox>
            <Label>Email</Label>
            <TextField
              id="standard-basic"
              fullWidth
              value={email}
              onChange={(e) => this.handleChange(e, 'email')}
            />
          </StretchBox>
          <StretchBox>
            <Label>Phone</Label>
            <TextField
              id="standard-basic"
              fullWidth
              value={phone}
              onChange={(e) => this.handleChange(e, 'phone')}
            />
          </StretchBox>
          <StretchBox>
            <Label>Date of Birth</Label>
            <TextField
              id="date"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => this.handleChange(e, 'dob')}
            />
          </StretchBox>
          <StretchBox>
            <Label>Bio</Label>
            <FullWidthTextareaAutosize
              id="standard-basic"
              label="Bio"
              rowsMin={10}
              value={bio}
              onChange={(e) => this.handleChange(e, 'bio')}
            />
          </StretchBox>
        </StyledCard>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.account,
})

const mapDispatchToProps = {
  editDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountEdit)
