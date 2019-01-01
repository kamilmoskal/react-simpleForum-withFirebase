import React from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/topicActions'
import moment from 'moment'

const Comment = (props) => {
    const { comment, auth } = props
    // console.log(auth)
    // console.log(comment)
    return(
         <div className="collection-item">
            <p>{comment.content}</p>
            <div className="lighten-4 grey-text">{moment(comment.createdAt.toDate()).calendar()}</div>
            <div className="lighten-4 grey-text">{comment.name}</div>

            { auth.uid === comment.nameId ? <div className="delete-comment lighten-4 grey-text" onClick={() => {props.deleteComment(comment)}}><i className="material-icons">delete_forever</i></div> : null}

        </div>
    )
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