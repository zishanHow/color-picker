
const colorValue = document.getElementById("color-input")
const chooseMode = document.getElementById("choose-mode")

const btn = document.getElementById("btn")
const getRenderColor = document.getElementById("render-color-section")


btn.addEventListener("click", () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue.value.slice(1)}&mode=${chooseMode.value}&count=5`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        let colorArray = []
        data.colors.forEach((item) => {
           colorArray.push(item.hex.value)
        })
        console.log(colorArray)
    })
})