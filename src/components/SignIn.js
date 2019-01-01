import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    //// reset authError
    componentDidMount(){
        this.props.resetAuthError();
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
  render() {
      const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container row">
          <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
                <h5>Sign in</h5>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <div className="btn red darken-4 waves-effect waves-light" onClick={this.handleSubmit}>Login</div>
                </div>
                <div className="center">
                    { authError ? <p className="red-text">{authError}</p> : null }
                </div>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (datafromstate) => dispatch(signIn(datafromstate)),
        resetAuthError: () => { dispatch({type: 'RESET_ERROR' }) } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
