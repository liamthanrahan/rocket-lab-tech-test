import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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

const SaveButton = styled.div`
  align-self: flex-end;
  color: ${props => (props.disabled ? '#CCCCCC' : '#169bd5')};
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  text-decoration: none;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
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
  color: ${props => (props.error ? '#f44336' : '#00ae95')};
  font-weight: 700;
`

const FullWidthTextareaAutosize = styled(TextareaAutosize)`
  flex: 1;
  margin-top: 1em;
`

const TextAreaError = styled.div`
  margin-top: 3px;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  color: #f44336;
`

export default class AccountEdit extends Component {
  constructor(props) {
    super(props)
    // Copy across the existing details to the state to be edited from the controlled inputs
    // If we choose not to save the changes we don't want to overwrite the previous values
    this.state = { ...props.data }
  }

  handleSave = () => {
    const { editDetails, history } = this.props
    editDetails(this.state)
    history.push('/')
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  render() {
    const { firstName, lastName, email, phone, dob, bio } = this.state

    const isFirstNameError = firstName.length === 0
    const isLastNameError = lastName.length === 0
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    const isEmailError = !emailRegex.test(email)
    const phoneRegex = new RegExp(
      /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/
    )
    const isPhoneError = !phoneRegex.test(phone)
    const isDobError = dob.length === 0
    const isBioError = bio.length === 0
    const isAnyError =
      isFirstNameError ||
      isLastNameError ||
      isEmailError ||
      isPhoneError ||
      isDobError ||
      isBioError

    return (
      <Container maxWidth="sm">
        <Top>
          <BackButton to="/" data-testid="back">
            <BackButtonIcon />
          </BackButton>
          <PageHeader>My Account</PageHeader>
          <SaveButton
            disabled={isAnyError}
            onClick={() => {
              if (!isAnyError) {
                this.handleSave()
              }
            }}
            data-testid="save"
          >
            Save
          </SaveButton>
        </Top>
        <StyledCard>
          <StretchBox>
            <Label error={isFirstNameError}>First Name</Label>
            <TextField
              error={isFirstNameError}
              id="standard-basic"
              fullWidth
              value={firstName}
              helperText={isFirstNameError ? 'Your first name is required' : ''}
              onChange={e => this.handleChange(e, 'firstName')}
              data-testid="firstname"
            />
          </StretchBox>
          <StretchBox>
            <Label error={isLastNameError}>Last Name</Label>
            <TextField
              error={isLastNameError}
              id="standard-basic"
              fullWidth
              value={lastName}
              helperText={isLastNameError ? 'Your last name is required' : ''}
              onChange={e => this.handleChange(e, 'lastName')}
            />
          </StretchBox>
          <StretchBox>
            <Label error={isEmailError}>Email</Label>
            <TextField
              error={isEmailError}
              id="standard-basic"
              fullWidth
              value={email}
              helperText={isEmailError ? 'Your email is not a valid email' : ''}
              onChange={e => this.handleChange(e, 'email')}
            />
          </StretchBox>
          <StretchBox>
            <Label error={isPhoneError}>Phone</Label>
            <TextField
              error={isPhoneError}
              id="standard-basic"
              fullWidth
              value={phone}
              helperText={
                isPhoneError
                  ? 'Your phone number is not a valid phone number'
                  : ''
              }
              onChange={e => this.handleChange(e, 'phone')}
            />
          </StretchBox>
          <StretchBox>
            <Label error={isDobError}>Date of Birth</Label>
            <TextField
              error={isDobError}
              id="date"
              type="date"
              fullWidth
              value={dob}
              onChange={e => this.handleChange(e, 'dob')}
            />
            <TextAreaError>
              {isDobError ? 'Your date of birth is required' : ''}
            </TextAreaError>
          </StretchBox>
          <StretchBox>
            <Label error={isBioError}>Bio</Label>
            <FullWidthTextareaAutosize
              id="standard-basic"
              label="Bio"
              rowsMin={10}
              value={bio}
              onChange={e => this.handleChange(e, 'bio')}
            />
            <TextAreaError>
              {isBioError ? 'Please provide a bio' : ''}
            </TextAreaError>
          </StretchBox>
        </StyledCard>
      </Container>
    )
  }
}

AccountEdit.propTypes = {
  editDetails: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    dob: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
