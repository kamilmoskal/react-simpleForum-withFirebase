import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions/topicActions'

class EditComment extends Component {
    state = {
        editContent: '', topicId: "", commentId: "",
        
    }
    
    handleChange = (e) => {
        this.setState({
            editContent: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.editContent.length > 0){
            this.setState({
                topicId: this.props.comment.idTopic,
                commentId: this.props.comment.id
            }, function(){
                this.props.editComment(this.state);
                this.props.resetStateEdit();
            })
        } else {
            
        }
    }
  render() {
    const show = this.props.showEdit ? (
        <div className="input-field addcomment">
            <textarea id="content" className="materialize-textarea" defaultValue={this.props.comment.content} onChange={this.handleChange}></textarea>
            {/* <label htmlFor="textarea1">Edit</label> */}
            <button className="btn red darken-4 waves-effect waves-light" onClick={this.handleClick}>Edit comment</button>
        </div>
    ) : (
        <div></div>
    )

    return (
        <span>
            {show}
        </span>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editComment: (editData) => dispatch(editComment(editData))
    }
}

export default connect(null, mapDispatchToProps)(EditComment)



