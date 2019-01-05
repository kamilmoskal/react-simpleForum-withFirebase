import M from "materialize-css/dist/js/materialize.min.js";

const initState = {
    formError: null,
}

const topicReducer = (state = initState, action) => {
    if (action.type === 'CREATE_TOPIC'){
        console.log('created topic');
        M.toast({html: 'Topic Created!', classes:'toast'})
        return state;
    } else if (action.type === 'CREATE_TOPIC_ERROR') {
        console.log('created topic error', action.error);
        M.toast({html: 'Error!', classes:'toast'})
        return state;
    } else if (action.type === 'CREATE_COMMENT') {
        console.log('created comment');
        M.toast({html: 'Comment Added!', classes:'toast'})
        return state;
    } else if (action.type === 'CREATE_COMMENT_ERROR') {
        console.log('created comment error', action.error);
        M.toast({html: 'Error!', classes:'toast'})
        return state;
    } else if (action.type === 'DELETE_COMMENT') {
        console.log('comment deleted');
        M.toast({html: 'Comment Deleted', classes:'toast'})
        return state;
    } else if (action.type === 'DELETE_COMMENT_ERROR') {
        console.log('comment delete error', action.error);
        M.toast({html: 'Error!', classes:'toast'})
        return state;
    } else if (action.type === 'EDIT_COMMENT') {
        console.log('comment edited');
        M.toast({html: 'Comment Edited', classes:'toast'})
        return state;
    } else if (action.type === 'EDIT_COMMENT_ERROR') {
        console.log('comment edit error', action.error);
        M.toast({html: 'Error!', classes:'toast'})
        return state;
    } else if (action.type === 'ADD_LIKE_COMMENT') {
        console.log('comment like status updated');
        M.toast({html: 'Like/Dislike Added!', classes:'toast'})
        return state;
    } else if (action.type === 'ADD_LIKE_COMMENT_ERROR') {
        console.log('comment like status error', action.error);
        M.toast({html: 'Error!', classes:'toast'})
        return state;
    } else if (action.type === 'FORM_NULL_TOPIC') {
        M.toast({html: 'Error!', classes:'toast'})
        return {
            ...state,
            formError: "To publish topic, you must fill title and content"
        }
    } else if (action.type === 'FORM_NULL_COMMENT') {
        M.toast({html: 'Error!', classes:'toast'})
        return {
            ...state,
            formError: "To publish comment, you must fill content"
        }
    } else if (action.type === 'RESET_ERROR') {
        return {
            ...state,
            formError: null
        }
    } else {
        return state
    }
}

export default topicReducer