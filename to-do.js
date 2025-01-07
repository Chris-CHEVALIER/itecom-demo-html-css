const form = document.querySelector("form")
const list = document.querySelector("#list")
const input = document.getElementById("todo-item")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const text = input.value
    if (text) {
        const newItem = document.createElement("li")
        newItem.textContent = text
        list.appendChild(newItem)
        input.value = ""
    }
})