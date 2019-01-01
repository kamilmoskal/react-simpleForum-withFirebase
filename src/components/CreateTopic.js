import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../actions/topicActions'
import { Redirect } from 'react-router-dom'

class CreateTopic extends Component {
    state = {
        title: '',
        content: ''
    }
    componentDidMount(){
        this.props.resetFormError();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title !== "" && this.state.content !== "") {
            this.props.createTopic(this.state);
            this.props.history.push('/')
        } else {
            this.props.formNullTopic();
        }
    }
  render() {
    const { auth, formError } = this.props
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
            <h5 className="grey-text text-darken-3">Create New Topic</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Topic Content</label>
                <textarea onChange={this.handleChange} id="content" className="materialize-textarea"></textarea>
            </div>
            <div className="input-field">
                <button className="btn red darken-4 waves-effect waves-light">Create</button>
            </div>
            <div className="center">
                { formError ? <p className="red-text">{formError}</p> : null }
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        formError: state.topic.formError 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTopic: (topic) => dispatch(createTopic(topic)),
        formNullTopic: () => { dispatch({type: 'FORM_NULL_TOPIC' }) },
        resetFormError: () => { dispatch({type: 'RESET_ERROR' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopic)