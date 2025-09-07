window.onload = function() { // connect all the functions/features here
        
    // css_modify() 
    /*
    Since iportal have a brand new version of frontend, we deprecate the css_modify()
    for now and we may bring it back in the future.
    */
    login() // functions written in login.js
    
}

const delay = (s) => {
    return new Promise(resolve => {
      setTimeout(resolve,s); 
    });
  };