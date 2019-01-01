const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        console.log('You logged in succesfull!')
        return {
            ...state,
            authError: null
        }
    } else if (action.type === 'LOGIN_ERROR') {
        console.log('You failed log in!', action.error)
        return {
            ...state,
            authError: 'Login failed'
        }
    } else if (action.type === 'SIGNOUT_SUCCESS') {
        console.log('You logged out sucesfull')
        return state
    } else if (action.type === 'SIGNUP_SUCCESS') {
        console.log('You signed up sucesfull')
        return {
            ...state,
            authError: null
        }
    } else if (action.type === 'SIGNUP_ERROR') {
        console.log('Signup error')
        return {
            ...state,
            authError: action.error.message
        }
    } else if (action.type === 'RESET_ERROR') {
        return {
            ...state,
            authError: null
        }
    } else {
        return state
    }
}

export default authReducer