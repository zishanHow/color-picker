
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

// btn.addEventListener("click", () => {
//     getScheme()
// })



document.addEventListener("click", (e) => {
    if(e.target.id === "btn"){
        console.log(e.target.id)
        getScheme()
    }
    else if(e.target.dataset.hex || e.target.id === "color-name"){
        console.log(e.target.dataset.hex)
        navigator.clipboard.writeText(e.target.dataset.hex)
            .then(() => {
                console.log("Text Copid to clipboard")
            })
            .catch((error) => {
                console.error("Failed to copy text: ", error)
            })
    }
})





function renderColorDiv(color){
    //console.log(color)
    let html = ``

    color.forEach((unit) => {
        //console.log(unit)
        html += ` 
                <div data-hex=${unit} class="rendering-color" id="rendering-color" style="background-color:${unit};">
                    <p class="color-name" id="color-name">${unit}</p>
                </div>
        `
    })

    renderColorSection.innerHTML = html
}