let input = prompt("User name")
let pass

if (input == "admin") {
    pass = prompt("Type the password")
    if (pass == "TheMaster") {
        alert("Welcome!")
    }
    else if (pass == "canceled") {

    }
    else {
        alert("Wrong password")
    }
}
else if (input == "canceled") {

}
else {
    alert("I dont know you")
}