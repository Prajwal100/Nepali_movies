

export function isLoggedIn(){
    const accessToken=localStorage.getItem('access_token');
    if(accessToken){
        return true;
    }
    return false;
}

export function generateImageUrl(fileName){
    return `http://localhost:4000/${fileName}`;
}