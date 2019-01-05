const initState = {
    formError: null,
}

const topicReducer = (state = initState, action) => {
    if (action.type === 'CREATE_TOPIC'){
        console.log('created topic');
        return state;
    } else if (action.type === 'CREATE_TOPIC_ERROR') {
        console.log('created topic error', action.error);
        return state;
    } else if (action.type === 'CREATE_COMMENT') {
        console.log('created comment');
        return state;
    } else if (action.type === 'CREATE_COMMENT_ERROR') {
        console.log('created comment error', action.error);
        return state;
    } else if (action.type === 'DELETE_COMMENT') {
        console.log('comment deleted');
        return state;
    } else if (action.type === 'DELETE_COMMENT_ERROR') {
        console.log('comment delete error', action.error);
        return state;
    } else if (action.type === 'EDIT_COMMENT') {
        console.log('comment edited');
        return state;
    } else if (action.type === 'EDIT_COMMENT_ERROR') {
        console.log('comment edit error', action.error);
        return state;
    } else if (action.type === 'FORM_NULL_TOPIC') {
        return {
            ...state,
            formError: "To publish topic, you must fill title and content"
        }
    } else if (action.type === 'FORM_NULL_COMMENT') {
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