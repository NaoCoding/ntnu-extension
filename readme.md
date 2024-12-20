## NTNU Extension

#### Overview

This is a simple extension for websites related to NTNU (including [iportal](https://iportal.ntnu.edu.tw/) , [Moodle](https://moodle3.ntnu.edu.tw/)),<br> which can be used to improve the user experience of these websites. <br> 
It is still a prototype and we will add more and more functions gradually.

#### Features

###### iportal
- [x] Automatically Login 
- [x] CSS Modification (菜單、功能列)

###### Moodle
- [x] Automatically Login

#### How to use

1. Clone or [Download](https://github.com/NaoCoding/ntnu-extension/archive/refs/heads/main.zip) the repo
2. `cp config_template.js config.js` or rename the config_template.js to config.js and fill your info
3. [Load the folder of extension from your browser](https://support.google.com/chrome/a/answer/2714278?hl=zh-Hant)
**Do not delete the folder after you loaded into browser**

#### Config

config.js
```
username : Your NTNU Student ID

password : Your NTNU Password

theme : check the ./src/theme.js to see the available themes
        you can also write your own theme.
        feel free to submit a pull request of themes too.
```


#### Contribute the repo

You can contribute the repo by submitting a pull request.

Check the `main.js` to see how to add new features.

If you have any questions, please submit an issue.

#### License

This project is licensed under the Apache2 License - see the [LICENSE.md](LICENSE.md) file for details
