let result = document.getElementById("resl")


function add(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    //console.log(typeof(num1))
    //console.log(typeof(num1).value)
    //console.log(num1)
    //console.log(num1.value)
    //console.log(num1.value+num2.value)
    
    console.log(parseFloat(num1.value) + parseFloat(num2.value))
    let resl = parseFloat(num1.value) + parseFloat(num2.value)
    result.textContent = resl
    
}

function sub(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    console.log(parseFloat(num1.value) - parseFloat(num2.value))

    let resl = parseFloat(num1.value) - parseFloat(num2.value)
    result.textContent = resl
}

function mul(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    console.log(parseFloat(num1.value) * parseFloat(num2.value))

    let resl = parseFloat(num1.value) * parseFloat(num2.value)
    result.textContent = resl
}

function div(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    console.log(parseFloat(num1.value) / parseFloat(num2.value))

    let resl = parseFloat(num1.value) / parseFloat(num2.value)
    result.textContent = resl
}


