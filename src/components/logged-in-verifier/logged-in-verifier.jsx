// import { Component } from 'react'
// import { connect } from 'react-redux'
// import { setRedirectUrl, browserHistory } from 'react-router-dom'

// export default class LoggedInVerifier extends Component {
//   componentDidMount() {
//     const { dispatch, currentURL } = this.props
//     console.log('ao')
//     if (!true) {
//       dispatch(setRedirectUrl(currentURL))
//       browserHistory.replace("/login")
//     }
//   }

//   render() {
//     if (this.props.isLoggedIn) {
//       return this.props.children
//     } else {
//       return null
//     }
//   }
// }

// function mapStateToProps(state, ownProps) {
//   console.log('state, ownProps: ',state, ownProps);
//   return {
//     isLoggedIn: state.loggedIn,
//     currentURL: ownProps.location.pathname
//   }
// }

// //export default connect(mapStateToProps)(LoggedInVerifier)
