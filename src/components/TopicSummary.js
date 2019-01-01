import React from 'react'

const TopicSummary = ({topic}) => {
    return(
        <div className="card">
            <blockquote className="flow-text">
            <p className="text-title">{topic.title}<span className="secondary-content black-text">{topic.comments.length}</span></p>
            </blockquote>
        </div>
    )
}

export default TopicSummary