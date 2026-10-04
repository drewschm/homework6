let recent = "";

document.querySelector("#addition").addEventListener("click", function() {
    recent = "add"
})

document.querySelector("#subtraction").addEventListener("click", function() {
    recent = "subtraction"
})

document.querySelector("#multiplication").addEventListener("click", function() {
    recent = "multiplication"
})

document.querySelector("#division").addEventListener("click", function() {
    recent = "division"
})
document.querySelector("#calculation").addEventListener("click", function() {
    console.log("clicked");
})

document.querySelector("#calculation").addEventListener("click", function() {
    document.querySelector("#answer").innerHTML = mathCalc();
})

function mathCalc (num1, num2) {
    if (recent == "add") {
        const result = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
        return result;
    }
    else if (recent == "subtraction") {
        const result = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value);
        return result;
    }
    else if (recent == "multiplication") {
        const result = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value);
        return result;
    }
    else if (document.getElementById("num2").value === "0") {
        return "Please don't divide by 0 :]";
    }
    else if (recent == "division") {
        const result = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value);
        return result;
    }
}