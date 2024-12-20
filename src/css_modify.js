function css_modify(){
    
    css_modify_iportal_menu()
    
}

async function css_modify_iportal_menu(){
 
    if(window.location.href.includes("https://iportal.ntnu.edu.tw/myPortal.do?thetime=")){

        toHide = ["#header" , "#Column1" , "#Column3" , "#box_aptreeHandle" , 
            "#div_aptreeContent > table > tbody > tr > td > div:nth-child(2) > a",
            "#div_aptreeContent > table > tbody > tr > td > div:nth-child(2)",
            "#box_aptree > center > table > tbody > tr:nth-child(2)",
            "#box_aptree > center > table > tbody > tr:nth-child(1) > td:nth-child(1)",
            "#box_aptree > center > table > tbody > tr:nth-child(1) > td:nth-child(3)"
        ]

        toHide.forEach(element => {
            document.querySelector(element).style.display = "none"
        });

        let label =  document.querySelector("#Column2").style

        label.width = "50%"
        label.position = "absolute"
        label.height = "100%"
        label.top = "0"
        label.left = "25%"
        label.margin = "0"
        label.padding = "0"
        label.setProperty("background-color" , theme[config.theme].menu.background)
        document.querySelector("#box_aptree > center").style.setProperty("background-color" , theme[config.theme].menu.background)

        label = document.querySelector("#divStandaptree > ul").style
        
        label.setProperty("display","flex")
        label.setProperty("flex-direction","column")
        label.setProperty("margin-top","10px")
        label.setProperty("margin-left","10px")
        label.setProperty("background-color" , theme[config.theme].menu.background)


        document.querySelector("body").style.setProperty("background-color" , theme[config.theme].menu.background)


        const option_list = document.querySelectorAll("li")
        option_list.forEach(element => {

            element.querySelectorAll("img").forEach(img => {
                img.style.display = "none"
            })

            element.querySelectorAll("a").forEach(obj => {
                obj.style.setProperty("color" , theme[config.theme].menu.font)
                if(obj.href.includes("javascript:aptreeNext")){
                    obj.click()
                    const wait = setInterval(() => {
                        if(obj.parentNode.querySelectorAll("div > ul > li").length){
                            clearInterval(wait)
                            obj.parentNode.querySelectorAll("div > ul > li > img").forEach(a => {
                                a.style.display = "none"
                            })
                            obj.parentNode.querySelectorAll("div > ul > li > a").forEach(a => {
                                a.style.setProperty("color" , theme[config.theme].menu.font)
                            })
                            obj.href = "#"
                            
                        }
                        
                    }, 50);
                }
            })

            element.style.width = "95%"
            element.style.setProperty("top" , "5px")
            element.style.setProperty("align-content","flex-start")
            element.style.setProperty("align-item","stretch")
            element.style.setProperty("position" , "relative")
            element.style.setProperty("margin" , "0.25%")
            element.style.setProperty("padding" , "15px")
            element.style.setProperty("border-radius" , "5px")
            element.style.setProperty("border","solid 1px " + theme[config.theme].menu.border)
            element.style.setProperty("background-color" , theme[config.theme].menu.background)
            

           
        })

    }

}