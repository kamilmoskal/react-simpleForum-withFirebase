import React from 'react'
import { Link } from 'react-router-dom'
import TopicSummary from './TopicSummary'

const TopicsList = ({topics}) => {
    return(
        <div className="topic-list section">
            { topics && topics.map(topic => {
                return (
                    <Link to={'/topic/' + topic.id} key={topic.id}>
                        <TopicSummary topic={topic} />
                    </Link>
                )
            })}
        </div>
    )
}

export default TopicsList