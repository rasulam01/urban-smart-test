

export const logged = (state = false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return !state
        default:
            return state
    }
}

export const logIn = (state = '', action) => {
    switch (action.type) {
        case 'LOG_IN':
            return state + action.payload
        default:
            return state
    }
}