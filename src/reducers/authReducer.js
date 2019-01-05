import M from "materialize-css/dist/js/materialize.min.js";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        console.log('You logged in succesfull!')
        M.toast({html: 'You Logged In!', classes:'toast'})
        return {
            ...state,
            authError: null
        }
    } else if (action.type === 'LOGIN_ERROR') {
        console.log('You failed log in!', action.error)
        M.toast({html: 'Error!', classes:'toast'})
        return {
            ...state,
            authError: 'Login failed'
        }
    } else if (action.type === 'SIGNOUT_SUCCESS') {
        console.log('You logged out sucesfull')
        M.toast({html: 'You Sign Out!', classes:'toast'})
        return state
    } else if (action.type === 'SIGNUP_SUCCESS') {
        console.log('You signed up sucesfull')
        M.toast({html: 'You Sign Up!', classes:'toast'})
        return {
            ...state,
            authError: null
        }
    } else if (action.type === 'SIGNUP_ERROR') {
        console.log('Signup error')
        M.toast({html: 'Error!', classes:'toast'})
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