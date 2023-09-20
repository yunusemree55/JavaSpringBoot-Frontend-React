

export const LOGIN_TO_PAGE = "LOGIN_TO_PAGE";
export const LOGOUT_FROM_PAGE = "LOGOUT_FROM_PAGE";
export const IS_EMPLOYER = "IS_EMPLOYER"
export const UPDATE_ACTIVE_USER= "UPDATE_ACTIVE_USER"

export function loginToPage(user) {

    return {
        type:LOGIN_TO_PAGE,
        payload:user
    }
    
}

export function logoutFromPage(){

    return{
        type: LOGOUT_FROM_PAGE
    }
    
}

export function isEmployer(bool) {
    
    return{
        type: IS_EMPLOYER,
        payload:bool
    }
    
}

export function updateActiveUserPhoto(updatedPhoto) {

    return{
        type:UPDATE_ACTIVE_USER,
        payload:updatedPhoto
    }
    
}
