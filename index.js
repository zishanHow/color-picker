const colorValue = document.getElementById("color-input")
const chooseMode = document.getElementById("choose-mode")
const btn = document.getElementById("btn")
const renderColorSection = document.getElementById("render-color-section")
const footerEl = document.getElementById("footer")

// getting the color scheme from API
function getScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue.value.slice(1)}&mode=${chooseMode.value}&count=5`)
        .then((response) => response.json())
        .then((data) => {
            let colorArray = []
            data.colors.forEach((item) => {
                colorArray.push(item.hex.value)
            })
            renderColorDiv(colorArray)
            renderFooter(colorArray)
        })
}

// handeling the click event 
document.addEventListener("click", (e) => {
    if (e.target.id === "btn") {
        getScheme()
    }
    else if (e.target.dataset.hex || e.target.id === "color-name") {
        navigator.clipboard.writeText(e.target.dataset.hex)
            .then(() => {
                alert("Text Copid to clipboard")
            })
            .catch((error) => {
                console.error("Failed to copy text: ", error)
            })
    }
    else if (e.target.dataset.fhex) {
        navigator.clipboard.writeText(e.target.dataset.fhex)
            .then(() => {
                alert("Text Copid to clipboard")
            })
            .catch((error) => {
                console.error("Failed to copy text: ", error)
            })
    }
})

// rendering the color to the DOM.
function renderColorDiv(color) {
    let colorHtml = ``
    color.forEach((unit) => {
        colorHtml += ` 
            <div data-hex='${unit}' class="rendering-color" id="rendering-color" style="background-color:${unit};">
            </div>
        `
    })
    renderColorSection.innerHTML = colorHtml
}

// color hex number at bottom.
function renderFooter(color) {
    let footerHtml = ``
    color.forEach((unit) => {
        footerHtml += `
            <p data-fhex='${unit}' class="ftr-p" id="ftr-p">${unit}</p>
        `
    })
    footerEl.innerHTML = footerHtml
}