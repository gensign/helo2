// create inital state
const initalState = {
    username: '',
    profile: '',
    userid: 0
};

// Action Types
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';

// Action Builders
export function update_user (updateUser) {
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

// Reducer Function export
export default function reducer(state = initalState, action) {
    switch(action.type) {
         default:
            return state;
    }
};