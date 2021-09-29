let input = prompt("User name")

if (input == "admin") {
    let pass = prompt("Type the password")
    if (pass == "TheMaster") {
        alert("Welcome!")
    }
    else if (pass == null || pass == "") {
        alert("Canceled")
    }
    else {
        alert("Wrong password")
    }
}
else if (input == null || input == "") {
    alert("Canceled")
}
else {
    alert("I dont know you")
}