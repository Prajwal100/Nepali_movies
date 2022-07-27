

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

export const toDatetimeLocal = (str) => {
    const date = new Date(str);
    let ten = function (i) {
      return (i < 10 ? "0" : "") + i;
    },
      YYYY = date.getFullYear(),
      MM = ten(date.getMonth() + 1),
      DD = ten(date.getDate()),
      HH = ten(date.getHours()),
      II = ten(date.getMinutes()),
      SS = ten(date.getSeconds());
    return YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + II + ":" + SS;
  };
  
  export const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };