console.log("Hello World")



const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
    const colorValue = document.getElementById("color-input").value
    console.log(colorValue)
})