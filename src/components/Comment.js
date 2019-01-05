import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/topicActions'
import moment from 'moment'
import EditComment from './EditComment'

/* const Comment = (props) => {
    const { comment, auth } = props
    // console.log(auth)
    // console.log(comment) */
class Comment extends Component {
    state = {
        showEdit: false
    }
    resetStateEdit = () => {
        this.setState({
            showEdit: false
        })
    }
    handleClick = () => {
        this.setState(prevState => ({
            showEdit: !prevState.showEdit
          }));
    }
    render() {
        const { comment, auth } = this.props
        return(
            <div className="collection-item">

            { comment.edited ?  <span id="edit-text">edited: {moment(comment.editDate.toDate()).calendar()}</span> : null}

                <p>{comment.content}</p>


                <div className="grey-text date">{moment(comment.createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div className="grey-text text-darken-1">{comment.name}</div>

                <div className="like-unlike-state grey-text"><i className="material-icons">exposure_plus_1</i></div>


                { auth.uid === comment.nameId ? 
                    <div className="delete-comment lighten-4 grey-text" onClick={() => {this.props.deleteComment(comment)}}><i className="material-icons">delete_forever</i></div> 
                : 
                    <div className="add-unlike-comment red-text"><i className="material-icons">arrow_downward</i></div>}

                { auth.uid === comment.nameId ? 
                    <div className="edit-comment lighten-4 grey-text" onClick={this.handleClick}><i className="material-icons">edit</i></div> 
                : 
                    <div className="add-like-comment green-text"><i className="material-icons">arrow_upward</i></div>}

                
                { auth.uid === comment.nameId ? <EditComment showEdit={this.state.showEdit} comment={comment} resetStateEdit={this.resetStateEdit}/> : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (commentData) => dispatch(deleteComment(commentData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)