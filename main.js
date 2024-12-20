window.onload = function() { // connect all the functions/features here
        
    css_modify() // functions written in css_modify.js
    login() // functions written in login.js
    
}

const delay = (s) => {
    return new Promise(resolve => {
      setTimeout(resolve,s); 
    });
  };