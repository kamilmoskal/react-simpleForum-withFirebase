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
    handleClick = () => {
        this.setState(prevState => ({
            showEdit: !prevState.showEdit
          }));
    }
    render() {
        const { comment, auth } = this.props
        return(
            <div className="collection-item">
                { comment.edited ?  <span>edited: {moment(comment.editDate.toDate()).calendar()}</span> : null}

                <p>{comment.content}</p>
                <div className="grey-text">{moment(comment.createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div className="grey-text text-darken-1">{comment.name}</div>

                { auth.uid === comment.nameId ? <div className="delete-comment lighten-4 grey-text" onClick={() => {this.props.deleteComment(comment)}}><i className="material-icons">delete_forever</i></div> : null}

                { auth.uid === comment.nameId ? <div className="delete-comment lighten-4 grey-text" onClick={this.handleClick}><i className="material-icons">edit</i></div> : null}
                
                { auth.uid === comment.nameId ? <EditComment showEdit={this.state.showEdit} comment={comment}/> : null}

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