import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { editDetails } from '../actions'
import AccountEdit from '../components/AccountEdit'

const mapStateToProps = (state) => ({
  data: state.account,
})

const mapDispatchToProps = {
  editDetails,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountEdit))
