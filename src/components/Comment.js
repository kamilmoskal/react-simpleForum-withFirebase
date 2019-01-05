import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/topicActions'
import moment from 'moment'
import EditComment from './EditComment'
import { likeCommentStatus } from '../actions/topicActions'

/* const Comment = (props) => {
    const { comment, auth } = props
    // console.log(auth)
    // console.log(comment) */
class Comment extends Component {
    state = {
        showEdit: false,
        topicId: "", commentId: "", 
    }
    resetStateEdit = () => {
        this.setState({
            showEdit: false
        })
    }
    toggleEdit = () => {
        this.setState(prevState => ({
            showEdit: !prevState.showEdit
          }));
    }
    addLike = () => {
        this.setState({
            topicId: this.props.comment.idTopic,
            commentId: this.props.comment.id,
            like: true
        }, function(){
           this.props.likeCommentStatus(this.state);
        })
    }
    addDislike = () => {
        this.setState({
            topicId: this.props.comment.idTopic,
            commentId: this.props.comment.id,
            like: false
        }, function(){
           this.props.likeCommentStatus(this.state);
        })
    }
    render() {
        const { comment, auth } = this.props
        return(
            <div className="collection-item">
                {/* if comment properies 'edited' is true show this */}
                { comment.edited ?  <span id="edit-text">edited: {moment(comment.editDate.toDate()).calendar()}</span> : null }

                <p>{comment.content}</p>

                <div className="grey-text">{moment(comment.createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div className="grey-text text-darken-2">&nbsp;{comment.name}&nbsp;</div>

                {/* if comment properies 'likeStatus' is !== 0 show this */}
                { comment.likeStatus === 0 ? null : 
                    <div className={ comment.likeStatus > 0 ? 'green-text text-darken-2' : "red-text text-darken-4"}>{comment.likeStatus}</div>}



                {/* if user is logged in and his id === comment nameId, show 'edit' and 'delete btns only for his comments */}
                { auth.uid === comment.nameId ? 
                    <div className="delete-comment grey-text" onClick={() => {this.props.deleteComment(comment)}}><i className="material-icons">delete_forever</i></div> : null }
                   
                { auth.uid === comment.nameId ? 
                    <div className="edit-comment grey-text" onClick={this.toggleEdit}><i className="material-icons">edit</i></div> : null }
                
                {/* if user is logged in and his id is diffrent than comment.nameId, show like/dislike icons*/}
                { auth.uid && (auth.uid !== comment.nameId) ? 
                    <div className="add-unlike-comment grey-text" onClick={this.addDislike}><i className="material-icons">exposure_minus_1</i></div> : null}
                
                { auth.uid && (auth.uid !== comment.nameId) ? 
                    <div className="add-like-comment grey-text" onClick={this.addLike}><i className="material-icons">exposure_plus_1</i></div> : null}

                {/* show for only user comments, edit Bar*/}
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
        deleteComment: (commentData) => dispatch(deleteComment(commentData)),
        likeCommentStatus: (comment) => dispatch(likeCommentStatus(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)