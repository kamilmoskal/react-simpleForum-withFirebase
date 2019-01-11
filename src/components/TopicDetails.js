import React, { Component } from 'react';
import Comment from './Comment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'  // do polaczenia componenta z jedna kolekcja czyli z 'topics' w bazie danych
import { compose } from 'redux' /// zeby sie polaczyc trzeba dodac drugi higher order component przez compoase
import { createComment } from '../actions/topicActions'
import moment from 'moment'


class TopicDetails extends Component {
    state = {
        content: "", topicId: "", commentId: "",
    }
    componentDidMount(){
        this.props.resetFormError();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    createComment = (e) => {
        e.preventDefault();
        if (this.state.content !== ""){
            let commentId = Math.random()*10;
            this.setState({
                topicId: this.props.location.pathname.slice(7),
                commentId: commentId
            }, function(){
                this.props.createComment(this.state)
                this.setState({
                    content: ""
                })
                this.props.resetFormError();
                
            })
        } else {
            this.props.formNullComment();
        }
    }
  render() {
    const { topic, auth, formError } = this.props;
    //// if user is logged in show add comment button
    const addCommentVisibility = auth.uid ? ( 
        <div className="card col s12 m12 l8 offset-l2">
                    <div className="card-content">
                        <form onSubmit={this.createComment}>
                            <div className="input-field">
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                            <label htmlFor="textarea1">Comment</label>
                            </div>
                            <button className="btn red darken-4 waves-effect waves-light" onClick={this.createComment}>Add comment</button>

                            <div className="center">
                            { formError ? <p className="red-text">{formError}</p> : null }
                            </div>

                        </form>
                    </div>
                </div>
     ) : ( <div className="card center z-depth-0 col s12 m12 l8 offset-l2 grey-text">
            log in to add comments
         </div> )
    //// if topic exist return topic with all comments
      if (topic) {
        return (
            <div className="container section row">
                <div className="card col s12 m12 l8 offset-l2">
                    <div className="card-content">
                        <span className="flow-text">{topic.title}</span>
                        <p>{topic.content}</p>
                    </div>
                    <div className="card-action lighten-4 grey-text">
                        <div>{moment(topic.createdAt.toDate()).calendar()}</div>
                        <div>{topic.name}</div>
                    </div>
                </div>

                <div className="collection col s12 m12 l8 offset-l2">
                    { topic.comments && topic.comments.map(comment => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        )
                    })}
                </div>

                {addCommentVisibility}   

            </div>
        )
      } else {
          return(
              <div className="container center">
                  <p>Loading topic...</p>
              </div>
          )
      }
  }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    const topics = state.firestore.data.topics;
    const topic = topics ? topics[id] : null
    return {
       topic: topic,
       auth: state.firebase.auth,
       formError: state.topic.formError 
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
        formNullComment: () => { dispatch({type: 'FORM_NULL_COMMENT' }) },
        resetFormError: () => { dispatch({type: 'RESET_ERROR' }) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToprops),
    firestoreConnect([
        { collection: 'topics' }
    ])
)(TopicDetails)
