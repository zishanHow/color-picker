
const colorValue = document.getElementById("color-input")
const chooseMode = document.getElementById("choose-mode")

const btn = document.getElementById("btn")
const renderColorSection = document.getElementById("render-color-section")


function getScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue.value.slice(1)}&mode=${chooseMode.value}&count=5`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        let colorArray = []
        data.colors.forEach((item) => {
           colorArray.push(item.hex.value)
        })
        //console.log(colorArray)
        renderColorDiv(colorArray)
    })
}


btn.addEventListener("click", () => {
    getScheme()
})

function renderColorDiv(color){
    //console.log(color)
    let html = ``

    color.forEach((unit) => {
        console.log(unit)
    })
}

