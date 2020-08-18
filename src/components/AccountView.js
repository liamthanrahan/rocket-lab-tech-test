import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'

const Top = styled.div`
  display: flex;
  flex-direction: row;
`

const PageHeader = styled.h1`
  flex: 1;
  color: #00ae95;
  margin-bottom: 0;
`

const EditButton = styled(Link)`
  align-self: flex-end;
  color: #169bd5;
  text-decoration: none;
`

const StyledCard = styled(Card)`
  margin-top: 1em;
  padding: 1em;
`

const NameBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const InfoBox = styled.div`
  margin-top: 1em;
`

const StretchBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Label = styled.div`
  color: #00ae95;
  font-weight: 700;
`

export default function AccountView({ data }) {
  const { firstName, lastName, email, phone, dob, bio } = data
  return (
    <Container maxWidth="sm">
      <Top>
        <PageHeader>My Account</PageHeader>
        <EditButton to="/edit">Edit</EditButton>
      </Top>
      <StyledCard>
        <NameBox>
          <StretchBox>
            <Label>First Name</Label>
            <div>{firstName}</div>
          </StretchBox>
          <StretchBox>
            <Label>Last Name</Label>
            <div>{lastName}</div>
          </StretchBox>
        </NameBox>
        <InfoBox>
          <Label>Email</Label>
          <div>{email}</div>
        </InfoBox>
        <InfoBox>
          <Label>Phone</Label>
          <div>{phone}</div>
        </InfoBox>
        <InfoBox>
          <Label>Date of Birth</Label>
          <div>{dob}</div>
        </InfoBox>
        <InfoBox>
          <Label>Bio</Label>
          <div>{bio}</div>
        </InfoBox>
      </StyledCard>
    </Container>
  )
}

AccountView.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    dob: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
}
