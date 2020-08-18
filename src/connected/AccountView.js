import { connect } from 'react-redux'
import AccountView from '../components/AccountView'

const mapStateToProps = state => ({
  data: state.account,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AccountView)
