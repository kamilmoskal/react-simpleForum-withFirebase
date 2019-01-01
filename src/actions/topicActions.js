export const createTopic = (topic) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const profile = getState().firebase.profile; // grab profile z state
        const authorId = getState().firebase.auth.uid; // grab active user
        const firestore = getFirestore(); /// reference to our firestore database
        firestore.collection('topics').add({ /// reference to projects in out database /// after dots add new one data to collection
            ...topic,   ///topic has title and content so we adding this
            name: profile.name,
            nameId: authorId,
            createdAt: new Date(),
            comments: []
        }).then(() => {
            dispatch({ type: 'CREATE_TOPIC', topic: topic})
        }).catch((error) => {
            dispatch({ type: 'CREATE_TOPIC_ERROR', error})
        })
    }
}

export const createComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('topics').doc(comment.topicId).update({
           
            comments: firestore.FieldValue.arrayUnion({ //// dodanie do arraya 'comments' objectu
                content: comment.content,
                id: comment.commentId,
                idTopic: comment.topicId,
                name: profile.name,
                nameId: authorId,
                createdAt: new Date()
            })

        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT', topic: comment})
        }).catch((error) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR', error})
        })

    }
}

export const deleteComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();  
        //// grab actual comments from specific topicID from firestore
        const actualComments = getState().firestore.data.topics[comment.idTopic].comments
        //// delete from firestore clicked comment through comment.id and filter method
        const newComments = actualComments.filter(e => e.id !== comment.id)   
        //// update topic comments
         firestore.collection('topics').doc(comment.idTopic).update({

            comments: newComments

        }).then(() => {
            dispatch({ type: 'DELETE_COMMENT', topic: comment})
        }).catch((error) => {
            dispatch({ type: 'DELETE_COMMENT_ERROR', error})
        })  

    }
}