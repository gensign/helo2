// create inital state
const initalState = {
    username: '',
    profile: '',
    password: '',
    userid: 0
};

// Action Types
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
const SET_USER = 'SET_USER';

// Action Builders
export function update_user(updateUser) {
    return {
        type: UPDATE_USER_INFO,
        payload: updateUser
    };
};

export function clear_user(clearUser) {
    return {
        type: CLEAR_USER_INFO,
        payload: clearUser
    };
};

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    };
};


// Reducer Function export
export default (state = initalState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            const { username, password } = payload
            return { ...state, username, password }
        default:
            return state;
    }
};