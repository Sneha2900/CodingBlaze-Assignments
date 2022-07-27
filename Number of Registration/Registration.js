let saveEl = document.getElementById("save")
let valueEl = document.getElementById("value")

function increment() {
    count +=1
    valueEl.textContent =  count
}

function decrement() {
    count -=1
    valueEl.textContent =  count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent +=countStr
    valueEl.textContent = 0
    count = 0
}

function reset() {
    saveEl.textContent = "Previous Entries : "
    valueEl.textContent = 0
    count = 0
}