function login(){

    login_iportal()
    login_moodle()

}

function login_iportal(){
    
    if(window.location.href == "https://iportal.ntnu.edu.tw/ntnu/"){

        document.querySelector("#muid").value = config.username
        document.querySelector("#mpassword").value = config.password
        document.querySelector("body > table:nth-child(2) \
            > tbody > tr:nth-child(2) > td > table > tbody > \
            tr:nth-child(2) > td:nth-child(3) > table > tbody > \
            tr:nth-child(2) > td > table:nth-child(1) > tbody > \
            tr:nth-child(2) > td > div > input[type=button]").click()

    }

}

function login_moodle(){
    
    if(window.location.href == "https://moodle3.ntnu.edu.tw/"){

        document.querySelector("#username").value = config.username
        document.querySelector("#password").value = config.password
        document.querySelector("#boxForm > div > form > div.sign-up-btn > button").click()

    }

}