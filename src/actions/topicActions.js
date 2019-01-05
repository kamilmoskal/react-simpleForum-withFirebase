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
                createdAt: new Date(),
                editDate: '',
                edited: false,
                likeStatus: 0
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
            dispatch({ type: 'DELETE_COMMENT' })
        }).catch((error) => {
            dispatch({ type: 'DELETE_COMMENT_ERROR', error})
        })  

    }
}

export const editComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        /////Firestore has problem with updating arrays in specific index so i doing this

        /////Grab through reference all comments in firestore
        let actualComments = getState().firestore.data.topics[comment.topicId].comments;

        ////make container for array
        let updatedComments = [];

        //// copy array from reference to empty updatedComments array
        actualComments.forEach(comment => {
            updatedComments.push({
                content: comment.content,
                id: comment.id,
                idTopic: comment.idTopic,
                name: comment.name,
                nameId: comment.nameId,
                createdAt: comment.createdAt,
                editDate: comment.editDate,
                edited: comment.edited,
                likeStatus: comment.likeStatus
            })
        })

        //// grab index which i want to update
        let numberArray = actualComments.findIndex(e => {return e.id === comment.commentId});
        
        //// update in specific index array
        updatedComments[numberArray].content = comment.editContent;
        updatedComments[numberArray].editDate = new Date();
        updatedComments[numberArray].edited = true; 
        
        //// replace updated array in firestore
        firestore.collection('topics').doc(comment.topicId).update({
           
            comments: updatedComments
            
        }).then(() => {
            dispatch({ type: 'EDIT_COMMENT' })
        }).catch((error) => {
            dispatch({ type: 'EDIT_COMMENT_ERROR', error})
        })  

    }
}


export const likeCommentStatus = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        let actualComments = getState().firestore.data.topics[comment.topicId].comments;
        let updatedComments = [];

        actualComments.forEach(comment => {
            updatedComments.push({
                content: comment.content,
                id: comment.id,
                idTopic: comment.idTopic,
                name: comment.name,
                nameId: comment.nameId,
                createdAt: comment.createdAt,
                editDate: comment.editDate,
                edited: comment.edited,
                likeStatus: comment.likeStatus
            })
        })

        let numberArray = actualComments.findIndex(e => {return e.id === comment.commentId});
        if (comment.like === true){
            updatedComments[numberArray].likeStatus += 1;
        } else {
            updatedComments[numberArray].likeStatus -= 1;
        }

        firestore.collection('topics').doc(comment.topicId).update({
           
            comments: updatedComments
            
        }).then(() => {
            dispatch({ type: 'ADD_LIKE_COMMENT' })
        }).catch((error) => {
            dispatch({ type: 'ADD_LIKE_COMMENT_ERROR', error})
        })  

    }
}