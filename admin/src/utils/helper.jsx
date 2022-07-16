

export function isLoggedIn(){
    const accessToken=localStorage.getItem('access_token');
    if(accessToken){
        return true;
    }
    return false;
}